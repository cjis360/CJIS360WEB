import {
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type BlogPost,
  users,
  contactSubmissions,
  blogPosts,
} from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(
    submission: InsertContactSubmission
  ): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(category: string): Promise<BlogPost[]>;
}

// Singleton pool for database connections
let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

export class DBStorage implements IStorage {
  private db;

  constructor() {
    this.db = drizzle(getPool());
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db
      .insert(users)
      .values(insertUser)
      .returning();
    return result[0];
  }

  async createContactSubmission(
    insertSubmission: InsertContactSubmission
  ): Promise<ContactSubmission> {
    const result = await this.db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return result[0];
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug));
    return result[0];
  }

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    return await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.category, category))
      .orderBy(desc(blogPosts.publishedAt));
  }
}

export const storage = new DBStorage();
