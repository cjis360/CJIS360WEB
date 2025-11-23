import { Shield, Search, AlertCircle, TrendingUp, Lock, Zap, FileCheck, Users, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const coreServices = [
    {
      icon: FileCheck,
      title: 'CJIS 6.0 Assessment & Gap Analysis',
      description: 'Comprehensive evaluation of your current security posture against CJIS 6.0 requirements. We identify gaps, prioritize risks, and provide a defensible compliance roadmap.',
      highlights: ['Controls mapping', 'Risk scoring', 'Remediation timeline', 'Audit-ready documentation'],
    },
    {
      icon: Lock,
      title: 'Continuous Monitoring & Compliance',
      description: 'Automated monitoring solutions that track your compliance status in real-time. Never wonder if you\'re still compliant—we provide ongoing evidence collection and alerts.',
      highlights: ['24/7 monitoring', 'Automated evidence', 'Alert mechanisms', 'Compliance dashboard'],
    },
    {
      icon: TrendingUp,
      title: 'Vendor Risk Management',
      description: 'Third-party systems handling CJI require scrutiny. We assess vendor security postures and help you manage supply chain risks according to CJIS 6.0 expectations.',
      highlights: ['Vendor assessment', 'Risk categorization', 'Compliance tracking', 'Remediation support'],
    },
    {
      icon: AlertCircle,
      title: 'Policy Development & Implementation',
      description: 'Expert guidance on creating and deploying CJIS-compliant policies. We help translate controls into actionable procedures your team can implement and maintain.',
      highlights: ['Policy drafting', 'Control mapping', 'Implementation planning', 'Staff training'],
    },
    {
      icon: Zap,
      title: 'Incident Response & Remediation',
      description: 'Rapid response to security incidents involving CJI. We help contain breaches, document findings, and demonstrate remediation to maintain your compliance posture.',
      highlights: ['Incident triage', 'Containment support', 'Documentation', 'Recovery planning'],
    },
    {
      icon: Users,
      title: 'Advisory & Training Services',
      description: 'Dedicated compliance experts available for strategic guidance, implementation support, and staff training on CJIS requirements and best practices.',
      highlights: ['Expert consultation', 'Implementation support', 'Staff training', 'Quarterly reviews'],
    },
  ];

  const differentiators = [
    {
      title: 'Fixed-Scope Assessments',
      description: 'Clear, predictable scope eliminates scope creep. You know exactly what you\'re getting and when.',
    },
    {
      title: 'Automation for Continuous Monitoring',
      description: 'Move beyond annual assessments. Get real-time compliance status with automated evidence collection and gap alerts.',
    },
    {
      title: 'Vendor Risk Management',
      description: 'CJIS 6.0 emphasizes supply chain security. We help you assess and manage third-party risks systematically.',
    },
    {
      title: 'Audit-Ready Artifacts',
      description: 'All deliverables are mapped to CJIS control families and organized for seamless FBI audits.',
    },
  ];

  const audiences = [
    { title: 'Local & State Law Enforcement', description: 'Police departments, sheriff\'s offices, and state agencies managing CJI systems' },
    { title: 'Prosecutors & Courts', description: 'District attorneys and court systems handling sensitive case management data' },
    { title: 'Public Safety Agencies', description: 'Correctional facilities, emergency services, and specialized law enforcement units' },
    { title: 'Private Vendors', description: 'Vendors providing solutions to law enforcement and CJI-handling organizations' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Complete CJIS 6.0 Compliance Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Fast, defensible CJIS 6.0 alignment with measurable controls, comprehensive evidence, and ongoing monitoring. We help law enforcement agencies and vendors translate complex CJIS requirements into actionable controls they can deploy and maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Market Positioning Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Promise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Core Value Proposition</h3>
                  <p className="text-lg text-muted-foreground">
                    CJIS 6.0 raises expectations across authentication, continuous monitoring, and supply chain risk management. We translate these updates into controls and documentation that agencies can deploy quickly, with measurable progress toward full compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">What Sets Us Apart</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Fixed-scope assessments</strong> prevent scope creep and surprise costs</span>
                    </li>
                    <li className="flex gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Automated continuous monitoring</strong> replaces one-time assessments</span>
                    </li>
                    <li className="flex gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Vendor risk management</strong> addresses CJIS 6.0's supply chain focus</span>
                    </li>
                    <li className="flex gap-3">
                      <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Audit-ready artifacts</strong> mapped to CJIS control families</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Who We Serve</h2>
              <div className="space-y-4">
                {audiences.map((audience, index) => (
                  <Card key={index} className="border-card-border">
                    <CardHeader>
                      <CardTitle className="text-xl">{audience.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{audience.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Service Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to help you achieve and maintain CJIS 6.0 compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-2 flex flex-col"
                  data-testid={`card-service-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4" data-testid={`service-icon-${index}`}>
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-2xl" data-testid={`service-title-${index}`}>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base leading-relaxed mb-6" data-testid={`service-description-${index}`}>
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2 mb-6">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 p-0 h-auto mt-auto"
                      data-testid={`button-service-${index}`}
                    >
                      <a href="/#contact" className="inline-flex items-center">
                        Get Started
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose CJIS360 */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Key Differentiators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="flex gap-4" data-testid={`differentiator-${index}`}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{diff.title}</h3>
                  <p className="text-muted-foreground">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Achieve CJIS 6.0 Compliance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact our compliance experts to discuss your specific needs and get a customized compliance roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-contact-cta">
              <a href="/#contact">Start Your Assessment</a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-platform-cta">
              <a href="https://cjis360.app" target="_blank" rel="noopener noreferrer">
                Try Assessment Platform
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
