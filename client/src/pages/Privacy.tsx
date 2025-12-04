import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-24 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-privacy">
              Global Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-privacy-updated">
              Last Updated: December 4, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              <div className="bg-card border border-card-border rounded-md p-6">
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy explains how CJIS360 ("we," "us," "our") collects, uses, discloses, stores, transfers, and protects Personal Data when you visit CJIS360.com & CJIS360.app or use our services ("Services").
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This Policy is designed for compliance with:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                  <li>EU GDPR & UK GDPR</li>
                  <li>California CCPA/CPRA</li>
                  <li>Colorado CPA</li>
                  <li>Virginia CDPA</li>
                  <li>Connecticut CTDPA</li>
                  <li>Utah UCPA</li>
                  <li>Canada PIPEDA & Quebec Law 25</li>
                  <li>Brazil LGPD</li>
                  <li>APEC cross-border frameworks</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. Data We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.1 Personal Data You Provide</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Name, email, phone, job title</li>
                      <li>Agency or organization details</li>
                      <li>Training records and assessment results</li>
                      <li>Uploaded files, notes, documentation</li>
                      <li>Payment details (collected by secure processors)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.2 Data Collected Automatically</h3>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Log data, IP address, browser type</li>
                      <li>Device identifiers</li>
                      <li>Usage analytics and performance telemetry</li>
                      <li>Cookies and tracking technologies (see Cookie Section)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">1.3 Sensitive Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      CJIS360 does not require or permit the upload of Criminal Justice Information (CJI). If a User uploads CJI in violation of these Terms, CJIS360 may delete the data and notify the organization.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Purposes for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process Personal Data for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account creation and authentication</li>
                  <li>Training delivery and assessment scoring</li>
                  <li>Compliance-readiness support</li>
                  <li>Customer service and technical support</li>
                  <li>Security monitoring, logging, and fraud prevention</li>
                  <li>Platform improvement and analytics</li>
                  <li>Billing and subscription management</li>
                  <li>Legal obligations and auditing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. Legal Bases for Processing (GDPR)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on the processing activity, CJIS360 relies on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Contractual necessity</strong> (account provision, service delivery)</li>
                  <li><strong className="text-foreground">Legitimate interests</strong> (security, fraud prevention, product improvement)</li>
                  <li><strong className="text-foreground">Legal obligation</strong> (tax, auditing)</li>
                  <li><strong className="text-foreground">Consent</strong> where required (cookies, marketing)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share Personal Data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Cloud hosting providers</li>
                  <li>Payment processors</li>
                  <li>Analytics tools</li>
                  <li>Customer-authorized administrators</li>
                  <li>Legal authorities when required</li>
                  <li>Subprocessors listed in our DPA</li>
                </ul>
                <p className="text-primary font-semibold mt-4">
                  CJIS360 never sells Personal Data.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Where data is transferred outside your region:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>EU/UK transfers use Standard Contractual Clauses (SCCs) and UK Addendum.</li>
                  <li>Canadian transfers follow PIPEDA/Law 25 requirements.</li>
                  <li>Transfers to APEC economies follow CBPR principles.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise required by contract or law, we retain Personal Data as follows:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 pr-4 text-foreground font-semibold">Data Category</th>
                        <th className="text-left py-3 text-foreground font-semibold">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Training records</td>
                        <td className="py-3">7 years or organizational instruction</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Account information</td>
                        <td className="py-3">Life of the account + 2 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Logs & telemetry</td>
                        <td className="py-3">12–24 months</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Payment data</td>
                        <td className="py-3">Per PCI-DSS and processor retention rules</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Support tickets</td>
                        <td className="py-3">3 years</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Cookies</td>
                        <td className="py-3">Per Cookie Policy (generally 12–24 months)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon deletion requests, data is removed unless retention is legally required.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement administrative, technical, and physical safeguards, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encryption in transit and at rest</li>
                  <li>Role-based access control</li>
                  <li>MFA optional for all accounts</li>
                  <li>Zero-trust network architecture</li>
                  <li>Continuous vulnerability scanning</li>
                  <li>Signed audit logging</li>
                  <li>Vendor security reviews</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Right to access</li>
                  <li>Right to correct</li>
                  <li>Right to delete</li>
                  <li>Right to portability</li>
                  <li>Right to restrict processing</li>
                  <li>Right to object</li>
                  <li>Right to opt out of sale/sharing (we do not sell data)</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to appeal (Colorado and others)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Requests can be submitted to: <a href="mailto:privacy@cjis360.com" className="text-primary hover:underline">privacy@cjis360.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Platform is not intended for children under 18. We do not knowingly collect children's data.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Cookie & Tracking Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use necessary, functional, and analytics cookies. Where required by law (EU/UK, some U.S. states), we obtain consent before setting non-essential cookies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Data Processing Addendum</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For GDPR-regulated customers, a DPA is available that defines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Roles of Controller and Processor</li>
                  <li>Subprocessor list</li>
                  <li>Security controls</li>
                  <li>Audit rights</li>
                  <li>International transfer mechanisms</li>
                  <li>Breach notification timelines</li>
                  <li>Return or deletion of data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Breach Notification</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We will notify affected customers of data breaches in accordance with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>GDPR Articles 33 & 34</li>
                  <li>CPRA breach rules</li>
                  <li>Other applicable global regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">13. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Policy periodically. Material changes will be communicated via email or platform notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">14. Contact Information</h2>
                <div className="bg-card border border-card-border rounded-md p-6 space-y-2">
                  <p className="text-foreground"><strong>CJIS360 / Karambwe Cybersecurity Group, LLC</strong></p>
                  <p className="text-muted-foreground">Privacy Office</p>
                  <p className="text-muted-foreground">7590 Via Luria<br />Lake Worth, FL 33467</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:privacy@cjis360.com" className="text-primary hover:underline">privacy@cjis360.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+15613181952" className="text-primary hover:underline">(561) 318-1952</a></p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-md p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Compliance Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy is designed to meet the requirements of major global privacy frameworks including GDPR, CCPA/CPRA, and other international regulations. We are committed to protecting your personal data and providing transparency about our data practices.
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
