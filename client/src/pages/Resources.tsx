import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function Resources() {
  const resourceTypes = [
    {
      icon: BookOpen,
      title: 'Blog & Articles',
      description: 'In-depth articles on CJIS compliance, best practices, policy updates, and implementation guides.',
      link: '/blog',
      buttonText: 'Read Blog',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world success stories showing how agencies achieved CJIS 6.0 compliance with our solutions.',
      link: '/case-studies',
      buttonText: 'View Case Studies',
    },
  ];

  const topics = [
    'CJIS 6.0 Updates & Changes',
    'Authentication & Access Control',
    'Continuous Monitoring Strategies',
    'Vendor Risk Management',
    'Incident Response Planning',
    'Audit Preparation',
    'Policy Development',
    'Technical Controls Implementation',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              CJIS Compliance Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, practical guides, and proven strategies to help your agency navigate CJIS 6.0 compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {resourceTypes.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-2"
                  data-testid={`card-resource-${index}`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-3xl">{resource.title}</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full gap-2" asChild data-testid={`button-resource-${index}`}>
                      <Link href={resource.link}>
                        {resource.buttonText}
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Topics */}
          <div className="border-t pt-16">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">
              Featured Topics
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Explore our comprehensive coverage of critical CJIS compliance areas
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-md bg-card border border-card-border hover-elevate"
                  data-testid={`topic-${index}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Need Help Getting Started?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Not sure where to begin with CJIS compliance? Our team can help assess your current posture and create a customized roadmap.
                </p>
                <Button asChild data-testid="button-contact-help">
                  <a href="/contact">Contact Our Experts</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Try Our Assessment Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Experience our interactive CJIS 6.0 assessment platform with automated risk scoring and compliance tracking.
                </p>
                <Button variant="outline" asChild data-testid="button-platform">
                  <a href="https://cjis360.app" target="_blank" rel="noopener noreferrer">
                    Launch Platform
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
