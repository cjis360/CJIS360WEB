import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./lib/resend";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const submissionsByIp = new Map<string, number[]>();

function contactRateLimit(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || "unknown";
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({
      success: false,
      message: "Too many submissions. Please try again later.",
    });
    return;
  }

  recent.push(now);
  submissionsByIp.set(ip, recent);
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.set("trust proxy", 1);

  // Contact form submission endpoint
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    try {
      // Honeypot field: real users never populate this hidden input.
      if (typeof req.body?.website === "string" && req.body.website.length > 0) {
        res.json({
          success: true,
          message: "Contact form submitted successfully",
          id: "0",
        });
        return;
      }

      const { website, ...contactFields } = req.body ?? {};
      const validatedData = insertContactSubmissionSchema.parse(contactFields);
      const submission = await storage.createContactSubmission(validatedData);

      // Send email notification (don't wait for it to complete)
      sendContactNotification({
        fullName: submission.fullName,
        email: submission.email,
        agencyName: submission.agencyName,
        phone: submission.phone || undefined,
        message: submission.message,
      }).catch(error => {
        console.error("Failed to send email notification:", error);
      });

      console.log("Contact submission received:", { id: submission.id });

      res.json({
        success: true,
        message: "Contact form submitted successfully",
        id: submission.id,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message,
        });
      } else {
        console.error("Error submitting contact form:", error.name || error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form",
        });
      }
    }
  });

  // Blog endpoints
  app.get("/api/blog", async (req, res) => {
    try {
      const { category } = req.query;
      const posts = category
        ? await storage.getBlogPostsByCategory(category as string)
        : await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog posts",
      });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        res.status(404).json({
          success: false,
          message: "Blog post not found",
        });
        return;
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch blog post",
      });
    }
  });

  // Case studies endpoints
  app.get("/api/case-studies", async (req, res) => {
    try {
      const { industry } = req.query;
      const studies = industry
        ? await storage.getCaseStudiesByIndustry(industry as string)
        : await storage.getAllCaseStudies();
      res.json(studies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch case studies",
      });
    }
  });

  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const study = await storage.getCaseStudyBySlug(req.params.slug);
      if (!study) {
        res.status(404).json({
          success: false,
          message: "Case study not found",
        });
        return;
      }
      res.json(study);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch case study",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
