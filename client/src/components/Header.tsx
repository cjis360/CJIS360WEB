import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import ThemeToggle from './ThemeToggle';
import logo from '@assets/cjis360_logo-transparent_1764473796374.png';

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
    <header className="bg-white dark:bg-slate-900 border-b sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center hover-elevate rounded-md px-2 py-1 -ml-2"
            data-testid="button-logo"
          >
            <img 
              src={logo} 
              alt="CJIS360" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild data-testid="link-nav-services">
              <Link href="/services">Services</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-nav-industries">
              <Link href="/industries">Industries</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-nav-resources">
              <Link href="/resources">Resources</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-nav-about">
              <Link href="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-nav-contact">
              <Link href="/contact">Contact</Link>
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
          <div className="md:hidden py-4 border-t bg-white dark:bg-slate-900" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button variant="ghost" className="justify-start w-full" asChild data-testid="link-services-mobile">
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost" className="justify-start w-full" asChild data-testid="link-industries-mobile">
                <Link href="/industries">Industries</Link>
              </Button>
              <Button variant="ghost" className="justify-start w-full" asChild data-testid="link-resources-mobile">
                <Link href="/resources">Resources</Link>
              </Button>
              <Button variant="ghost" className="justify-start w-full" asChild data-testid="link-about-mobile">
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" className="justify-start w-full" asChild data-testid="link-contact-mobile">
                <Link href="/contact">Contact</Link>
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
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
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
