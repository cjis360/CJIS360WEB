import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Built on Method, Not Marketing Claims
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CJIS360 is built on a transparent, repeatable methodology for assessing and implementing CJIS Security Policy requirements.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Methodology Card */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Assessment & Implementation Methodology</h3>
              <p className="text-foreground leading-relaxed">
                CJIS360 uses a structured approach grounded in the Stop. Scrutinize. Verify.™ methodology to help organizations evaluate their current state, identify policy alignment gaps, and implement targeted remediation. Our approach is systematic and repeatable, designed to provide clarity on the scope and status of CJIS Security Policy requirements relevant to your organization.
              </p>
            </CardContent>
          </Card>

          {/* Demonstration Environment Card */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">About Our Demonstration Environment</h3>
              <p className="text-foreground leading-relaxed">
                The CJIS360 platform demonstration uses a sanitized, non-production demonstration tenant. No real customer data, production systems, or actual law enforcement information is processed or stored in this environment. This ensures privacy and security while allowing teams to explore the platform's capabilities.
              </p>
            </CardContent>
          </Card>

          {/* Team Qualifications Card */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Team Qualifications</h3>
              <p className="text-foreground leading-relaxed">
                CJIS360 is developed and supported by professionals with deep experience in compliance and security engineering, including practitioners who have worked with CJIS Security Policy requirements in operational settings. Our team brings practical understanding of the challenges organizations face when implementing CJIS controls.
              </p>
            </CardContent>
          </Card>

          {/* Trust Center Link Card */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Security & Compliance Documentation</h3>
              <p className="text-foreground leading-relaxed mb-4">
                For detailed information about CJIS360's security practices, privacy commitments, and compliance documentation, visit our Trust Center.
              </p>
              <Link href="/trust-center">
                <a className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Visit the Trust Center
                </a>
              </Link>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div
            className="border border-yellow-600/30 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-6"
            data-testid="compliance-disclaimer"
          >
            <p className="text-sm text-foreground leading-relaxed">
              CJIS360 provides software and professional services that support customer alignment with applicable CJIS Security Policy requirements. Use of CJIS360 does not itself constitute FBI, state CJIS Systems Agency, auditor, or third-party certification. The customer remains responsible for determining applicability, implementing required safeguards, and satisfying state-specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
