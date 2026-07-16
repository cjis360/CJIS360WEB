import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  agencyName: text("agency_name").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  organizationType: text("organization_type"),
  state: text("state"),
  role: text("role"),
  employeeCount: text("employee_count"),
  packageInterest: text("package_interest"),
  auditTimeframe: text("audit_timeframe"),
  itReliance: text("it_reliance"),
  preferredContactMethod: text("preferred_contact_method"),
  consent: boolean("consent").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  agencyName: z.string().min(2, "Agency name must be at least 2 characters"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  organizationType: z.string().optional(),
  state: z.string().optional(),
  role: z.string().optional(),
  employeeCount: z.string().optional(),
  packageInterest: z.string().optional(),
  auditTimeframe: z.string().optional(),
  itReliance: z.string().optional(),
  preferredContactMethod: z.string().optional(),
  consent: z.boolean().refine(v => v === true, {
    message: "You must acknowledge the privacy notice to continue.",
  }),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array().notNull().default(sql`ARRAY[]::text[]`),
  author: text("author").notNull(),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true,
  updatedAt: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  clientName: text("client_name").notNull(),
  clientType: text("client_type").notNull(),
  industry: text("industry").notNull(),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").array().notNull(),
  testimonial: text("testimonial"),
  testimonialAuthor: text("testimonial_author"),
  testimonialRole: text("testimonial_role"),
  metrics: text("metrics").array().notNull().default(sql`ARRAY[]::text[]`),
  tags: text("tags").array().notNull().default(sql`ARRAY[]::text[]`),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true,
  publishedAt: true,
});

export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
