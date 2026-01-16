import { Shield, Target, Users, Award, CheckCircle, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const expertise = [
    {
      icon: Shield,
      title: 'CJI & CJIS Policy Expertise',
      description: 'Deep understanding of Criminal Justice Information systems and comprehensive knowledge of CJIS Security Policy requirements across all versions.',
    },
    {
      icon: CheckCircle,
      title: 'Controls Implementation',
      description: 'Expert implementation of technical, administrative, and physical controls mapped to CJIS policy areas and security control families.',
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid response capabilities for security incidents involving CJI, including containment, remediation, and documentation support.',
    },
    {
      icon: Target,
      title: 'Access Control & Authentication',
      description: 'Specialized expertise in advanced authentication requirements, multi-factor authentication, and identity management for CJIS 6.0 compliance.',
    },
    {
      icon: Users,
      title: 'Vendor Risk Management',
      description: "Comprehensive assessment and monitoring of third-party vendors handling CJI, addressing CJIS 6.0's enhanced supply chain security requirements.",
    },
    {
      icon: Award,
      title: 'Audit & Compliance',
      description: 'FBI CJIS audit preparation, ongoing compliance monitoring, and evidence collection to ensure continuous regulatory readiness.',
    },
  ];

  const values = [
    {
      title: 'Expertise',
      description: 'Our team comprises CJIS-certified professionals with extensive law enforcement and compliance experience.',
    },
    {
      title: 'Transparency',
      description: 'Clear communication, predictable pricing, and honest assessments of your compliance posture.',
    },
    {
      title: 'Partnership',
      description: 'We work alongside your team as trusted advisors, not just consultants, to achieve lasting compliance.',
    },
    {
      title: 'Innovation',
      description: 'Leveraging automation and modern tools to make compliance efficient, measurable, and sustainable.',
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
              About CJIS360
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are compliance experts dedicated to helping law enforcement agencies and public safety organizations achieve and maintain CJIS 6.0 compliance with confidence and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                CJIS360 exists to simplify the complex world of CJIS compliance. We believe that protecting Criminal Justice Information should not be overwhelming, expensive, or uncertain.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to provide law enforcement agencies with fast, defensible Criminal Justice Information Systems (CJI) compliance through measurable controls, comprehensive evidence collection, and ongoing monitoring that makes compliance sustainable.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Why CJIS Compliance Matters</h3>
              <p className="text-lg text-muted-foreground mb-6">
                The FBI CJIS Security Policy sets the standard for safeguarding Criminal Justice Information (CJI) from criminal history and warrants to dispatch logs and biometric data across its entire lifecycle. It applies to any organization or individual who can access, manage, store, transmit, or support CJI systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With CJIS Security Policy version 6.0, effective December 27, 2024, compliance expectations have expanded significantly. Version 6.0 introduces over 180 primary security controls and more than 1,300 subcontrols that demand measurable, verifiable evidence of implementation.
              </p>
              <p className="text-lg text-muted-foreground">
                Agencies must prove compliance through documentation, enforcement, identity and access controls, remote access safeguards, vendor accountability, and audit-ready evidence.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">100+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Agencies protected nationwide</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">50,000+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Compliance assessments completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">99.9%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Compliance success rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Team Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team brings deep expertise across all areas of CJIS compliance, from policy interpretation to technical implementation and ongoing monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-2"
                  data-testid={"card-expertise-" + index}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center" data-testid={"value-" + index}>
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us discuss how CJIS360 can help your agency achieve comprehensive CJIS 6.0 compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-contact-cta">
              <a href="/contact">Contact Us</a>
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
