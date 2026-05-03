import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "wouter";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: selectedCategory ? ['/api/blog', selectedCategory] : ['/api/blog'],
    queryFn: async () => {
      const url = selectedCategory 
        ? `/api/blog?category=${encodeURIComponent(selectedCategory)}`
        : '/api/blog';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      return response.json();
    },
  });

  const categories = ["All", "Compliance", "Best Practices", "Risk Management", "Auditing", "Technology"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-4" data-testid="breadcrumb">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="link-home">
                Home
              </Button>
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium">Resources</span>
          </div>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold" data-testid="heading-blog">
                Knowledge Center
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Expert insights, best practices, and compliance guidance for law enforcement agencies
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  (category === "All" && !selectedCategory) ||
                  category === selectedCategory
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
                data-testid={`button-category-${category.toLowerCase().replace(/\s/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover-elevate active-elevate-2 transition cursor-pointer" data-testid={`card-blog-post-${post.slug}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" data-testid={`badge-category-${post.id}`}>
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl" data-testid={`title-blog-post-${post.id}`}>
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm" data-testid={`excerpt-blog-post-${post.id}`}>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span data-testid={`author-blog-post-${post.id}`}>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span data-testid={`date-blog-post-${post.id}`}>
                            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
