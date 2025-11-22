import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactNotification } from "./lib/resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
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

      console.log("Contact submission received:", {
        id: submission.id,
        email: submission.email,
        agencyName: submission.agencyName,
      });

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
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact submissions",
      });
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

  const httpServer = createServer(app);

  return httpServer;
}
