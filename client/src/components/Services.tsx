import { Shield, FileText, Search, Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Risk & Compliance',
    description: 'CJIS Security Policy assessments, gap analysis, and remediation planning built around your agency\'s specific environment.',
    link: '#risk-compliance',
    external: false,
  },
  {
    icon: Search,
    title: 'Assessment Platform',
    description: 'Interactive online platform for conducting CJIS 6.0 assessments with automated risk scoring and compliance tracking.',
    link: 'https://cjis360.app',
    external: true,
  },
  {
    icon: Lightbulb,
    title: 'Advisory Services',
    description: 'Practical guidance on CJIS compliance strategy, policy development, and security requirements — from interpretation to implementation.',
    link: '#advisory',
    external: false,
  },
  {
    icon: FileText,
    title: 'Research & Resources',
    description: 'White papers, compliance guides, regulatory updates, and industry best practices for law enforcement agencies.',
    link: '#resources',
    external: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete CJIS Compliance Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything your agency needs to meet and hold CJIS Security Policy requirements.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-transform duration-300 hover:-translate-y-2"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center" data-testid={`service-icon-${index}`}>
                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl" data-testid={`service-title-${index}`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed" data-testid={`service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                  {service.external ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 p-0 h-auto"
                      data-testid={`button-service-${index}`}
                    >
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 p-0 h-auto"
                      data-testid={`button-service-${index}`}
                    >
                      <a href={service.link} className="inline-flex items-center">
                        Learn More
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
