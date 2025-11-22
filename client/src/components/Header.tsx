import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  const scrollToSection = (id: string) => {
    // If we're not on home page, navigate there first
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 -ml-2"
            data-testid="button-logo"
          >
            <Shield className="w-10 h-10 text-primary" strokeWidth={2.5} />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">CJIS360</span>
              <span className="text-xs text-muted-foreground -mt-1">Compliance Solutions</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('services')}
              data-testid="link-nav-services"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('industries')}
              data-testid="link-nav-industries"
            >
              Industries
            </Button>
            <Link href="/blog">
              <Button
                variant="ghost"
                data-testid="link-nav-resources"
              >
                Resources
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('trust')}
              data-testid="link-nav-trust"
            >
              Trust
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              data-testid="link-nav-contact"
            >
              Contact
            </Button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              asChild
              data-testid="link-platform-login"
            >
              <a
                href="https://cjis360.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Platform Login
              </a>
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('services')}
                className="justify-start"
                data-testid="link-services-mobile"
              >
                Services
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('industries')}
                className="justify-start"
                data-testid="link-industries-mobile"
              >
                Industries
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('trust')}
                className="justify-start"
                data-testid="link-trust-mobile"
              >
                Trust
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                className="justify-start"
                data-testid="link-about-mobile"
              >
                Contact
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start"
                data-testid="link-platform-login-mobile"
              >
                <a
                  href="https://cjis360.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Platform Login
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full"
                data-testid="button-get-started-mobile"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
