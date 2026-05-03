import { Building2, Scale, Shield, Users, Building, Lock, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Industries() {
  const industries = [
    {
      icon: Shield,
      title: 'Law Enforcement',
      description: 'Police departments, sheriffs offices, and state law enforcement agencies requiring CJIS compliance.',
      details: [
        'Records management systems',
        'Computer-aided dispatch',
        'Mobile data terminals',
        'Evidence management',
      ],
    },
    {
      icon: Scale,
      title: 'Courts & Legal',
      description: 'Court systems, prosecutors offices, and legal entities handling criminal justice information.',
      details: [
        'Case management systems',
        'E-filing platforms',
        'Document management',
        'Jury management',
      ],
    },
    {
      icon: Building2,
      title: 'Government Agencies',
      description: 'State and local government departments with access to criminal justice data systems.',
      details: [
        'Multi-agency data sharing',
        'Public safety integration',
        'Emergency services',
        'Administrative access',
      ],
    },
    {
      icon: Users,
      title: 'Private Security',
      description: 'Private security firms and contractors working with law enforcement agencies.',
      details: [
        'Background screening',
        'Access control systems',
        'Security operations',
        'Contract compliance',
      ],
    },
    {
      icon: Building,
      title: 'Probation & Parole',
      description: 'Probation and parole departments managing sensitive supervision and case data with CJI access requirements.',
      details: [
        'Supervision data management',
        'Case tracking systems',
        'Field officer access controls',
        'Multi-agency data sharing',
      ],
    },
    {
      icon: Lock,
      title: 'Technology Vendors',
      description: 'Software and service providers serving the criminal justice sector.',
      details: [
        'SaaS platforms',
        'Cloud services',
        'Integration solutions',
        'Vendor risk management',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CJIS compliance for every sector in the criminal justice system. We know your environment and what the policy actually requires.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-2 flex flex-col"
                  data-testid={`card-industry-${index}`}
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center" data-testid={`industry-icon-${index}`}>
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-2xl" data-testid={`industry-title-${index}`}>{industry.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed" data-testid={`industry-description-${index}`}>
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-semibold text-foreground mb-3">Common Use Cases:</p>
                      {industry.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 p-0 h-auto mt-auto"
                      data-testid={`button-industry-${index}`}
                    >
                      <a href="/contact" className="inline-flex items-center">
                        Discuss Your Needs →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every sector handling CJI faces different compliance challenges. We adapt our process to your systems and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tailored Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We adapt our process to your systems, your workflows, and the specific CJIS controls that apply to your sector.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proven Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team has worked with agencies across law enforcement, courts, probation, and technology vendor sectors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay engaged after the assessment, supporting your compliance posture as the policy changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tell us which sector you're in and we'll walk through what CJIS compliance means for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-contact-cta">
              <a href="/contact">Contact Our Team</a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-services-cta">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
