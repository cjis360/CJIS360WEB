import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">CJIS360</span>
                <span className="text-xs text-muted-foreground -mt-1">Compliance Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive CJIS 6.0 compliance solutions for law enforcement agencies nationwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted hover-elevate flex items-center justify-center transition"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted hover-elevate flex items-center justify-center transition"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-services">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-industries">
                    Industries
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://cjis360.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                  data-testid="link-footer-platform"
                >
                  Assessment Platform
                </a>
              </li>
              <li>
                <Link href="/case-studies">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-case-studies">
                    Case Studies
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-about">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-blog">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-muted-foreground hover:text-primary transition" data-testid="link-footer-privacy">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@cjis360.com"
                  className="text-sm text-muted-foreground hover:text-primary transition break-all"
                  data-testid="link-footer-email"
                >
                  contact@cjis360.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+18005551234"
                  className="text-sm text-muted-foreground hover:text-primary transition"
                  data-testid="link-footer-phone"
                >
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  123 Compliance Avenue<br />
                  Washington, DC 20001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} CJIS360. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-primary transition"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
            <a
              href="#security"
              className="text-sm text-muted-foreground hover:text-primary transition"
              data-testid="link-footer-security"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
