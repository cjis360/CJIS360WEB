import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our compliance experts to discuss how CJIS360 can help your agency achieve and maintain CJIS 6.0 compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about CJIS compliance? Need help with an assessment? Our team is here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a
                        href="mailto:contact@cjis360.com"
                        className="text-muted-foreground hover:text-primary transition"
                        data-testid="link-email"
                      >
                        contact@cjis360.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a
                        href="tel:+18005551234"
                        className="text-muted-foreground hover:text-primary transition"
                        data-testid="link-phone"
                      >
                        (800) 555-1234
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Monday - Friday, 9AM - 5PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Address</div>
                      <div className="text-muted-foreground" data-testid="text-address">
                        123 Compliance Avenue<br />
                        Washington, DC 20001<br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Business Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Why Choose CJIS360?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>Expert guidance from CJIS-certified professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>Proven track record with 200+ agencies nationwide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>Comprehensive assessment and remediation tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>Ongoing support and compliance monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span>Fixed-scope assessments with predictable pricing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
