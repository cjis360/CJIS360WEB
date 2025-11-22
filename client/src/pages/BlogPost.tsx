import { useQuery } from "@tanstack/react-query";
import { Link, useRoute } from "wouter";
import { format } from "date-fns";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import type { BlogPost } from "@shared/schema";

// Configure marked for safer HTML output
marked.setOptions({
  gfm: true,
  breaks: true,
});

// Helper function to safely render Markdown
function renderMarkdown(content: string): string {
  const rawHtml = marked.parse(content) as string;
  return DOMPurify.sanitize(rawHtml);
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      return response.json();
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 max-w-4xl py-16">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-8 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" size="sm" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <Badge className="mb-4" data-testid="badge-category">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-article-title">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6" data-testid="text-excerpt">
              {post.excerpt}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-b py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span data-testid="text-author">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span data-testid="text-published-date">
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <span key={index} data-testid={`tag-${index}`}>
                        {tag}
                        {index < post.tags.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            data-testid="article-content"
          />

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t">
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Help with CJIS Compliance?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team of experts can help your agency achieve and maintain full CJIS compliance.
                Schedule a consultation today.
              </p>
              <Link href="/#contact">
                <Button size="lg" data-testid="button-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
