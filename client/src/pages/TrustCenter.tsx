import { AlertTriangle, Lock, Shield, Server, Key, Users, Zap, FileText, AlertCircle, RotateCw, CheckCircle, Globe, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TrustCenter() {
  const trustTopics = [
    {
      icon: Shield,
      title: 'Security Overview',
      description: 'A comprehensive security overview is currently in development. Contact us for details on our current security posture and roadmap.',
      color: 'text-blue-600',
    },
    {
      icon: Lock,
      title: 'Data Handling & Classification',
      description: 'CJIS360 implements data classification and secure handling practices. CJIS360.com (this public website) does not accept or store Criminal Justice Information.',
      color: 'text-green-600',
    },
    {
      icon: Server,
      title: 'Hosting Regions & Data Residency',
      description: 'Information about our hosting regions and data residency options is in development. Please contact us for current availability.',
      color: 'text-purple-600',
    },
    {
      icon: Zap,
      title: 'Encryption in Transit and at Rest',
      description: 'Customer data is protected using industry-standard encryption methods for both transit and storage. Full technical specifications are available upon request.',
      color: 'text-yellow-600',
    },
    {
      icon: Key,
      title: 'Identity, MFA, RBAC & Administrative Access',
      description: 'CJIS360 implements multi-factor authentication, role-based access control, and administrative access management. Detailed technical controls are available upon request.',
      color: 'text-red-600',
    },
    {
      icon: Users,
      title: 'Tenant Isolation & Audit Logging',
      description: 'We maintain strict tenant isolation and comprehensive audit logging practices. Full documentation is available upon request.',
      color: 'text-indigo-600',
    },
    {
      icon: AlertCircle,
      title: 'Vulnerability Management & Penetration Testing',
      description: 'CJIS360 maintains an active vulnerability management program. Penetration testing details are available upon request.',
      color: 'text-orange-600',
    },
    {
      icon: Zap,
      title: 'Secure Software Development Lifecycle',
      description: 'Our secure development practices are currently being documented. We are committed to implementing SDL best practices across our platform.',
      color: 'text-cyan-600',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Incident response procedures are in development to ensure rapid detection, containment, and remediation of security events.',
      color: 'text-rose-600',
    },
    {
      icon: RotateCw,
      title: 'Business Continuity, Backup & Disaster Recovery',
      description: 'Business continuity and disaster recovery capabilities are in development to ensure service resilience.',
      color: 'text-teal-600',
    },
    {
      icon: FileText,
      title: 'Subprocessor List',
      description: 'A comprehensive subprocessor list is in development and will be published in this section. Details are available upon request.',
      color: 'text-slate-600',
    },
    {
      icon: CheckCircle,
      title: 'Retention, Export & Deletion',
      description: 'CJIS360 supports data retention policies, secure export, and compliant deletion. Full capabilities documentation is available upon request.',
      color: 'text-emerald-600',
    },
    {
      icon: Globe,
      title: 'Privacy Policy & Data Processing Addendum',
      description: (
        <>
          Our <Link href="/privacy" className="text-primary hover:underline font-semibold">Privacy Policy</Link> outlines our data handling practices. A Data Processing Addendum (DPA) is available upon request for regulated customers.
        </>
      ),
      color: 'text-sky-600',
    },
    {
      icon: Eye,
      title: 'Accessibility Statement & VPAT Roadmap',
      description: 'WCAG 2.2 AA is our accessibility target. A full accessibility statement and VPAT roadmap are in development.',
      color: 'text-fuchsia-600',
    },
    {
      icon: Shield,
      title: 'Vulnerability Disclosure Policy',
      description: 'Security researchers can report vulnerabilities to security@cjis360.com. A formal vulnerability disclosure policy is in development.',
      color: 'text-amber-600',
    },
    {
      icon: Globe,
      title: 'System Status',
      description: 'A public status page is planned. We are committed to transparency regarding platform availability and service health.',
      color: 'text-lime-600',
    },
    {
      icon: FileText,
      title: 'Terms of Service',
      description: (
        <>
          Our <Link href="/terms" className="text-primary hover:underline font-semibold">Terms of Service</Link> govern the use of CJIS360 platforms and services.
        </>
      ),
      color: 'text-pink-600',
    },
    {
      icon: Lock,
      title: 'AI and Customer-Data Use Statement',
      description: 'CJIS360 does not use customer data to train third-party AI models without explicit customer consent. Your data is used only to deliver and improve CJIS360 services.',
      color: 'text-violet-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-trust-center">
              Trust Center
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-trust-intro">
              Security, compliance, and transparency information for CJIS360
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Critical Security Warning */}
          <div
            className="border-2 border-amber-500 bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6 flex gap-4"
            data-testid="callout-security-warning"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div className="text-foreground leading-relaxed">
              <p className="font-semibold mb-2">Do not submit Criminal Justice Information, criminal-history records, case details, passwords, credentials, or sensitive system information through this public website.</p>
            </div>
          </div>

          {/* Compliance Disclaimer */}
          <div
            className="border-l-4 border-primary bg-primary/5 rounded-lg p-6"
            data-testid="callout-compliance-disclaimer"
          >
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Compliance Disclaimer:</span> CJIS360 provides software and professional services that support customer alignment with applicable CJIS Security Policy requirements. Use of CJIS360 does not itself constitute FBI, state CJIS Systems Agency, auditor, or third-party certification. The customer remains responsible for determining applicability, implementing required safeguards, and satisfying state-specific requirements.
            </p>
          </div>

          {/* Trust Topics Grid */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="heading-trust-topics">Trust Center Topics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trustTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card
                    key={index}
                    className="hover-elevate transition-transform duration-300 hover:-translate-y-1"
                    data-testid={`card-trust-topic-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-md bg-muted flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${topic.color}`} strokeWidth={2} />
                        </div>
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div
            className="bg-card border border-card-border rounded-lg p-8 text-center mt-12"
            data-testid="section-contact-cta"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">Questions About Our Security?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For detailed information about CJIS360's security practices, compliance status, or to request documentation such as security assessments or a Data Processing Addendum, please contact our team.
            </p>
            <a
              href="mailto:contact@cjis360.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition"
              data-testid="button-contact-security"
            >
              Contact Security Team
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
