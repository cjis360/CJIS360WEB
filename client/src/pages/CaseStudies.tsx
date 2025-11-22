import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@shared/schema";
import { useState } from "react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies", selectedIndustry],
    queryFn: async () => {
      const url = selectedIndustry 
        ? `/api/case-studies?industry=${encodeURIComponent(selectedIndustry)}`
        : '/api/case-studies';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch case studies');
      return res.json();
    },
  });

  const industries = Array.from(new Set(caseStudies?.map(study => study.industry) || []));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" data-testid="skeleton-title" />
          <Skeleton className="h-6 w-96 mx-auto mb-12" data-testid="skeleton-subtitle" />
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-96" data-testid={`skeleton-card-${i}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 border-b py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="page-title">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="page-subtitle">
            Real-world results from law enforcement agencies that trust CJIS360 for their compliance needs
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedIndustry === null ? "default" : "outline"}
              onClick={() => setSelectedIndustry(null)}
              data-testid="filter-all"
            >
              All Industries
            </Button>
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                data-testid={`filter-${industry.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!caseStudies || caseStudies.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground" data-testid="empty-state">
                No case studies found
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="hover-elevate" data-testid={`case-study-${study.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Badge variant="secondary" data-testid={`badge-industry-${study.slug}`}>
                        {study.industry}
                      </Badge>
                      <Badge variant="outline" data-testid={`badge-type-${study.slug}`}>
                        {study.clientType}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2" data-testid={`title-${study.slug}`}>
                      {study.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium" data-testid={`client-${study.slug}`}>
                      {study.clientName}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`result-${study.slug}-${idx}`}>
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {study.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {study.metrics.slice(0, 3).map((metric, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs" data-testid={`metric-${study.slug}-${idx}`}>
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Link href={`/case-studies/${study.slug}`}>
                      <Button variant="ghost" className="w-full group" data-testid={`button-view-${study.slug}`}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="cta-title">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="cta-description">
            Let's discuss how CJIS360 can help your agency achieve full compliance and operational excellence.
          </p>
          <Link href="/#contact">
            <Button size="lg" data-testid="button-contact">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
