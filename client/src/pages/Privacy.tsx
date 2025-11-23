import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last Updated: November 23, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CJIS360 ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in accordance with CJIS Security Policy requirements and applicable privacy laws.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Agency or organization name and details</li>
                      <li>Professional title and role</li>
                      <li>Information submitted through contact forms or assessment requests</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Usage Information</h3>
                    <p className="leading-relaxed">
                      We automatically collect certain information about your device and usage of our website, including:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>IP address and browser type</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and service requests</li>
                  <li>To conduct CJIS compliance assessments and provide consultation</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations and industry regulations</li>
                  <li>To protect against fraudulent or illegal activity</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a CJIS compliance solutions provider, we implement robust security measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Multi-factor authentication for system access</li>
                  <li>Regular security assessments and audits</li>
                  <li>Strict access controls and employee training</li>
                  <li>Compliance with CJIS Security Policy requirements</li>
                  <li>Incident response procedures and monitoring</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">With Your Consent:</strong> We share information when you explicitly authorize us to do so</li>
                  <li><strong className="text-foreground">Service Providers:</strong> We may share information with trusted third-party service providers who assist in our operations, subject to confidentiality agreements</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information to comply with applicable laws, regulations, legal processes, or government requests</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                  <li><strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong className="text-foreground">Data Portability:</strong> Request a copy of your information in a structured format</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Please note that disabling cookies may limit certain features of our website.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies and CJIS requirements.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-card border border-card-border rounded-md p-6 space-y-2">
                  <p className="text-foreground"><strong>CJIS360 Compliance Solutions</strong></p>
                  <p className="text-muted-foreground">123 Compliance Avenue<br />Washington, DC 20001</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:privacy@cjis360.com" className="text-primary hover:underline">privacy@cjis360.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+18005551234" className="text-primary hover:underline">(800) 555-1234</a></p>
                </div>
              </div>

              {/* CJIS Compliance Note */}
              <div className="bg-primary/5 border border-primary/20 rounded-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">CJIS Compliance Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a provider of CJIS compliance solutions, we maintain the highest standards of data protection and security. Our practices align with CJIS Security Policy requirements, including appropriate background checks for personnel with access to CJI, comprehensive security controls, and rigorous incident response procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
