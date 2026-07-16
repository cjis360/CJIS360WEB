import {
  LayoutDashboard,
  ClipboardCheck,
  Files,
  Search,
  ListChecks,
  FileText,
  ShieldAlert,
  GraduationCap,
  Activity,
  BarChart3,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Platform() {
  const capabilities = [
    {
      icon: LayoutDashboard,
      title: 'Risk Dashboard',
      description:
        'View readiness scores, control-family performance, high-risk findings, overdue actions, evidence status, training completion, vendor risk, and upcoming deadlines.',
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance Assessments',
      description:
        'Run full, rapid, targeted, annual, department-specific, vendor, and technical CJIS 6.0 assessments.',
    },
    {
      icon: Files,
      title: 'Evidence Management',
      description:
        'Request, upload, review, version, map, approve, and monitor evidence with ownership and expiration dates.',
    },
    {
      icon: Search,
      title: 'Gap Analysis',
      description:
        'Separate requirement status, evidence sufficiency, maturity, residual risk, and remediation priority.',
    },
    {
      icon: ListChecks,
      title: 'Findings and POA&M',
      description:
        'Convert gaps into corrective actions, responsible owners, milestones, dependencies, target dates, and closure validation.',
    },
    {
      icon: FileText,
      title: 'Policy Management',
      description:
        'Manage templates, approvals, versions, acknowledgments, review cycles, exceptions, and control mappings.',
    },
    {
      icon: ShieldAlert,
      title: 'Vendor Assurance',
      description:
        'Track vendors, Security Addenda, shared responsibility, personnel screening, subprocessors, and annual reassessments.',
    },
    {
      icon: GraduationCap,
      title: 'Training Tracking',
      description:
        'Assign supplemental training and reconcile completion evidence from CJIS Online, nexTEST, or other authorized systems, without claiming to replace state-mandated training systems.',
    },
    {
      icon: Activity,
      title: 'Continuous Monitoring',
      description:
        'Track recurring control reviews, evidence expiration, attestations, access reviews, vulnerability evidence, and compliance drift.',
    },
    {
      icon: BarChart3,
      title: 'Verification Reporting',
      description:
        'Generate executive, assessor, evidence, risk, remediation, training, vendor, and audit-preparation reports.',
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
              The CJIS360 Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              CJIS360.com (this marketing site) guides agencies through compliance strategy and introduces the CJIS360 framework. The real work happens on CJIS360.app — our production SaaS platform where authenticated agencies run assessments, manage evidence, track remediation, and maintain continuous compliance monitoring. From initial gap analysis to ongoing verification and vendor management, CJIS360.app is your complete assessment-to-monitoring lifecycle platform.
            </p>
          </div>
        </div>
      </section>

      {/* Product Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CJIS360.app provides a comprehensive suite of tools for every phase of CJIS compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-2 flex flex-col"
                  data-testid={`card-capability-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4" data-testid={`capability-icon-${index}`}>
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-xl" data-testid={`capability-title-${index}`}>
                      {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base leading-relaxed" data-testid={`capability-description-${index}`}>
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production vs Planned Section */}
      <section className="py-24 bg-background border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <p className="text-lg text-foreground text-center">
              Every capability shown here reflects current production functionality in CJIS360.app. Planned or roadmap features will always be clearly labeled.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Explore CJIS360.app?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how the platform streamlines your compliance workflow from assessment through continuous monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild data-testid="button-request-demo">
              <a href="/contact">Request a Platform Demonstration</a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-platform-login">
              <a href="https://cjis360.app" target="_blank" rel="noopener noreferrer">
                Platform Login
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
