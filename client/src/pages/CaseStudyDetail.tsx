import { useQuery } from "@tanstack/react-query";
import { Link, useRoute } from "wouter";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Building2, Target, Lightbulb, TrendingUp, Quote, CheckCircle2, Award } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudyDetailPage() {
  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug;

  const { data: caseStudy, isLoading, error } = useQuery<CaseStudy>({
    queryKey: ["/api/case-studies", slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      const res = await fetch(`/api/case-studies/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch case study');
      return res.json();
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Skeleton className="h-10 w-32 mb-8" data-testid="skeleton-back" />
          <Skeleton className="h-12 w-full mb-4" data-testid="skeleton-title" />
          <Skeleton className="h-6 w-64 mb-8" data-testid="skeleton-client" />
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64" data-testid={`skeleton-section-${i}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="error-title">
            Case Study Not Found
          </h1>
          <p className="text-muted-foreground mb-8" data-testid="error-message">
            The case study you're looking for doesn't exist.
          </p>
          <Link href="/case-studies">
            <Button data-testid="button-back-to-list">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/case-studies">
            <Button variant="ghost" data-testid="button-back">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-primary/5 border-b py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" data-testid="badge-industry">
              {caseStudy.industry}
            </Badge>
            <Badge variant="outline" data-testid="badge-type">
              {caseStudy.clientType}
            </Badge>
            {caseStudy.tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" data-testid={`badge-tag-${idx}`}>
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="case-study-title">
            {caseStudy.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="w-5 h-5" />
            <span className="text-lg font-medium" data-testid="client-name">{caseStudy.clientName}</span>
            <span className="text-sm">•</span>
            <span className="text-sm" data-testid="published-date">
              {format(new Date(caseStudy.publishedAt), "MMMM yyyy")}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Metrics */}
        {caseStudy.metrics.length > 0 && (
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.metrics.map((metric, idx) => (
                <Card key={idx} className="text-center" data-testid={`metric-card-${idx}`}>
                  <CardContent className="pt-6">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">{metric}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2" data-testid="challenge-heading">
            <Target className="w-6 h-6 text-primary" />
            The Challenge
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed" data-testid="challenge-text">
                {caseStudy.challenge}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2" data-testid="solution-heading">
            <Lightbulb className="w-6 h-6 text-primary" />
            Our Solution
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed" data-testid="solution-text">
                {caseStudy.solution}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2" data-testid="results-heading">
            <TrendingUp className="w-6 h-6 text-primary" />
            Results & Impact
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`result-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <blockquote className="text-lg text-foreground italic mb-4" data-testid="testimonial-quote">
                  "{caseStudy.testimonial}"
                </blockquote>
                {caseStudy.testimonialAuthor && (
                  <div className="text-sm">
                    <p className="font-semibold text-foreground" data-testid="testimonial-author">
                      {caseStudy.testimonialAuthor}
                    </p>
                    {caseStudy.testimonialRole && (
                      <p className="text-muted-foreground" data-testid="testimonial-role">
                        {caseStudy.testimonialRole}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* CTA */}
        <section className="pt-8 border-t">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="cta-title">
              Ready to Transform Your Compliance Program?
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="cta-description">
              Let's discuss how CJIS360 can deliver similar results for your agency.
            </p>
            <Link href="/#contact">
              <Button size="lg" data-testid="button-contact">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
