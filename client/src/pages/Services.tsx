import { Shield, Search, AlertCircle, TrendingUp, Lock, Zap, FileCheck, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SSVFramework from '@/components/SSVFramework';

export default function Services() {
  const coreServices = [
    {
      icon: FileCheck,
      title: 'CJIS 6.0 Interviews & Assessment',
      description: 'Structured interviews with your IT, security, and operations staff to evaluate your real-world compliance posture. We document findings, identify gaps, and prioritize risks against CJIS 6.0 control families.',
      highlights: ['Staff interviews & walkthroughs', 'Controls mapping', 'Risk scoring', 'Remediation timeline'],
    },
    {
      icon: Search,
      title: 'Gap Analysis & Risk Assessment',
      description: 'Evaluation of your current security posture against CJIS 6.0 requirements, using the SSV™ methodology to produce a compliance roadmap your agency can stand behind.',
      highlights: ['Current-state documentation', 'Gap identification', 'Risk prioritization', 'Audit-ready deliverables'],
    },
    {
      icon: AlertCircle,
      title: 'Policy Review & Development',
      description: 'Expert review of existing policies and procedures to identify alignment gaps with CJIS 6.0 requirements. We draft, revise, and implement compliant policies your team can own and maintain.',
      highlights: ['Policy gap review', 'Policy drafting & revision', 'Control mapping', 'Staff-ready procedures'],
    },
    {
      icon: Lock,
      title: 'Remediation Planning & Support',
      description: 'A phased plan that turns assessment findings into concrete, prioritized actions. We work with your team during implementation to make sure controls are applied correctly.',
      highlights: ['Phased action plans', 'Implementation guidance', 'Control verification', 'Progress tracking'],
    },
    {
      icon: Zap,
      title: 'Incident Response & Documentation',
      description: 'Rapid response to security incidents involving CJI. We help contain breaches, produce required documentation, and demonstrate remediation to maintain your compliance posture post-incident.',
      highlights: ['Incident triage', 'Containment support', 'Regulatory documentation', 'Recovery planning'],
    },
    {
      icon: Users,
      title: 'Advisory & Training Services',
      description: 'Compliance experts available for guidance, implementation support, and staff training on CJIS requirements and policy interpretation.',
      highlights: ['Expert consultation', 'Implementation support', 'Staff training', 'Quarterly reviews'],
    },
  ];

  const differentiators = [
    {
      title: 'Interview-Driven Assessments',
      description: 'We go beyond checklists. Structured staff interviews surface real operational gaps that documents alone cannot reveal.',
    },
    {
      title: 'Stop. Scrutinize. Verify.™ Methodology',
      description: 'Our proprietary GRC framework provides a disciplined, repeatable path from initial evaluation to certified compliance output.',
    },
    {
      title: 'Audit-Ready Artifacts',
      description: 'Every deliverable — policy documents, remediation plans, assessment reports — maps to CJIS control families and is organized for FBI audits.',
    },
    {
      title: 'Vendor Risk Management',
      description: 'CJIS 6.0 emphasizes supply chain security. We help you assess and manage third-party risks systematically with documented evidence.',
    },
  ];

  const audiences = [
    { title: 'Local & State Law Enforcement', description: 'Police departments, sheriff\'s offices, and state agencies managing CJI systems' },
    { title: 'Prosecutors & Courts', description: 'District attorneys and court systems handling sensitive case management data' },
    { title: 'Public Safety Agencies', description: 'Emergency services, specialized law enforcement units, and other public safety organizations with CJI access' },
    { title: 'Private Vendors', description: 'Technology vendors and service providers building for or supporting law enforcement agencies' },
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
              CJIS 6.0 compliance through structured interviews, gap assessments, policy reviews, and hands-on remediation support. We help agencies turn complex requirements into controls they can actually deploy.
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
                    CJIS 6.0 raises the bar on authentication, continuous monitoring, and supply chain risk. We turn those requirements into controls and documentation agencies can deploy quickly, with measurable progress at every step.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">What Sets Us Apart</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Interview-driven assessments</strong> surface operational gaps checklists miss</span>
                    </li>
                    <li className="flex gap-3">
                      <Search className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground"><strong className="text-foreground">Proprietary SSV™ framework</strong> provides a repeatable path to certified compliance</span>
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
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {audience.title}
                      </CardTitle>
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
              Everything your agency needs to get and stay CJIS 6.0 compliant.
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

      {/* SSV Framework Section */}
      <SSVFramework />

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
            Talk to our team about your agency's needs and we'll put together a clear compliance roadmap.
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
