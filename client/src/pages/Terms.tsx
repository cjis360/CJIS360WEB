import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-24 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" data-testid="heading-terms">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-terms-updated">
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
                  These Terms of Service ("Terms") constitute a binding agreement between you ("Customer," "you," "your," or "User") and Karambwe Cybersecurity Group, LLC, doing business as CJIS360 ("CJIS360," "we," "our," or "us"). These Terms govern your access to and use of the CJIS360.com & CJIS360.app website, platform, training modules, software, mobile applications, and all associated services (collectively, the "Service" or "Platform").
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By creating an account, accessing the Platform, or clicking "I Agree," you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree, you must discontinue use immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">1. About CJIS360</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    CJIS360 is a software-as-a-service platform delivering training modules, risk assessments, compliance documentation tools, and user management features for organizations subject to the CJIS Security Policy.
                  </p>
                  <p className="leading-relaxed">
                    CJIS360 is not a CJIS-certified system, nor does it process Criminal Justice Information (CJI). The Platform provides training and readiness tools only and does not guarantee compliance with the CJIS Security Policy or any other federal/state regulation.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">2. Eligibility & Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are at least 18 years old;</li>
                  <li>You are legally authorized by your employer or agency to use the Platform;</li>
                  <li>All registration information is accurate and kept current;</li>
                  <li>You will maintain the confidentiality of your login credentials;</li>
                  <li>You are not barred from receiving services under U.S. law or applicable jurisdictional law.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Government entities may accept these Terms subject to applicable procurement laws. Nothing in these Terms constitutes a waiver of sovereign immunity.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">3. License & Access Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Subject to these Terms, CJIS360 grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited license to use the Platform solely for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Organizational training;</li>
                  <li>Compliance-readiness activities;</li>
                  <li>Documentation generation;</li>
                  <li>Internal risk assessment and user management.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may not modify, reverse engineer, resell, commercialize, or otherwise exploit the Platform or its contents.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">4. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Platform, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Software code, algorithms, architectures, API structures;</li>
                  <li>Training modules, assessments, dashboards, scoring logic;</li>
                  <li>Risk frameworks, templates, workflows;</li>
                  <li>Documentation, images, videos, and courseware;</li>
                  <li>Trademarks, logos, designs;</li>
                  <li>AI models or automated assessment features,</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  are the exclusive property and trade secrets of CJIS360 or its licensors. Except for the limited license granted herein, no rights are transferred to you.
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">4.1 User Content Ownership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You retain ownership of all documents, configuration inputs, and training records you upload ("User Content"). You grant CJIS360 a worldwide, royalty-free license to process User Content solely for the purpose of providing the Service.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">4.2 Feedback</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Any suggestions, recommendations, improvements, or feedback you provide become CJIS360's property without compensation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">5. Restrictions on Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the Platform in a way that circumvents security controls or monitoring;</li>
                  <li>Use automated tools, bots, scrapers, or similar technologies;</li>
                  <li>Interfere with system operations or burden servers;</li>
                  <li>Copy or create derivative works of the Platform or training materials;</li>
                  <li>Use the Platform to store or process CJI or sensitive operational law-enforcement data;</li>
                  <li>Use the Platform for unlawful, fraudulent, competitive, or harmful purposes.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                  Violations may result in immediate account termination.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">6. Fees, Subscriptions & Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Subscriptions are billed in advance. Prices, tiers, and renewal terms are listed within your account or Order Form.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">6.1 Non-Refundability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Except where prohibited by law, all fees are non-refundable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">6.2 Late Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Late payments may result in suspension of access.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">6.3 Taxes</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You are responsible for all taxes except those based on CJIS360's income.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">7. Service Availability & Support</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CJIS360 will use commercially reasonable efforts to maintain uptime and performance. We may update, modify, suspend, or discontinue components of the Platform for maintenance, security, or improvement.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  No service-level guarantees are made unless expressly stated in a separate agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">8. Security & Data Handling</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CJIS360 implements industry-standard safeguards, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Encryption in transit and at rest;</li>
                  <li>Access control and audit logging;</li>
                  <li>Vulnerability management;</li>
                  <li>Vendor risk management;</li>
                  <li>Role-based access;</li>
                  <li>Incident reporting procedures.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                  CJIS360 is not a repository for CJI and must not be used to store CJI.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">9. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Both parties may receive non-public or proprietary information ("Confidential Information"). Each party agrees to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Protect such information with reasonable care;</li>
                  <li>Use it only to fulfill these Terms;</li>
                  <li>Not disclose it except to employees or contractors with a need to know.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Government entities may comply with public-records obligations but must provide notice where legally permissible.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">10. Data Processing & Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of the Platform is governed by the CJIS360 Global Privacy Policy, incorporated by reference.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Where required, CJIS360 will enter into a Data Processing Addendum (DPA) compliant with GDPR, CPRA, and global standards.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">11. Third-Party Services & Subprocessors</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CJIS360 may use third-party vendors (e.g., cloud hosting, analytics). A current list is available upon request.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We are not liable for the acts of third-party providers beyond what applicable law requires.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">12. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The Platform is provided "AS IS" and "AS AVAILABLE."</li>
                  <li>CJIS360 disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</li>
                  <li>CJIS360 does not guarantee CJIS compliance or legal outcomes.</li>
                  <li>Training modules and automated assessments are informational tools only.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">13. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>CJIS360 shall not be liable for indirect, consequential, special, punitive, or exemplary damages.</li>
                  <li>CJIS360's aggregate liability for all claims shall not exceed the fees paid by you in the 12 months preceding the claim.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  CJIS360 is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Compliance failures;</li>
                  <li>Criminal justice system access disruptions;</li>
                  <li>Security incidents caused by User negligence or third-party providers;</li>
                  <li>Loss of data not attributable to CJIS360's breach.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Certain jurisdictions may provide additional consumer rights; nothing herein limits those rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">14. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to indemnify and hold harmless CJIS360 from claims arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Misuse of the Platform;</li>
                  <li>Violation of these Terms;</li>
                  <li>Uploading infringing or unlawful User Content;</li>
                  <li>Non-compliance with CJIS or regulatory obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">15. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CJIS360 may suspend or terminate access if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fees are unpaid;</li>
                  <li>You violate these Terms;</li>
                  <li>Continued use poses security or operational risk.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                  <li>Your license ends;</li>
                  <li>Access is revoked;</li>
                  <li>Data will be handled per the Privacy Policy and retention schedule.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">16. Dispute Resolution & Arbitration</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">16.1 Mandatory Confidential Arbitration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Except for claims relating to IP, confidentiality, or injunctive relief, disputes will be resolved through binding, confidential arbitration under AAA Commercial Rules.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">16.2 Class Action Waiver</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You waive any right to participate in a class or representative action.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">16.3 Government Agencies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Public-sector entities may opt out of arbitration if prohibited by law.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">17. Export Controls</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You certify that you are not located in a sanctioned jurisdiction and will not use the Platform in violation of U.S. export laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">18. Miscellaneous</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>These Terms constitute the entire agreement.</li>
                  <li>If any part is invalid, the remainder remains enforceable.</li>
                  <li>Assignment by you is prohibited without CJIS360's consent.</li>
                  <li>Notices may be delivered electronically.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <div className="bg-card border border-card-border rounded-md p-6 space-y-2">
                  <p className="text-foreground"><strong>CJIS360 / Karambwe Cybersecurity Group, LLC</strong></p>
                  <p className="text-muted-foreground">7590 Via Luria<br />Lake Worth, FL 33467</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:privacy@cjis360.com" className="text-primary hover:underline">privacy@cjis360.com</a></p>
                  <p className="text-muted-foreground">Phone: <a href="tel:+15613181952" className="text-primary hover:underline">(561) 318-1952</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
