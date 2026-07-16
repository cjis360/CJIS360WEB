import { ArrowRight, ShieldAlert, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import lawEnforcementAI from '@assets/cjis_stock_images6_1763930832082.jpg';
import femaleITStaff from '@assets/cjis_stock_images8_1763930832082.jpg';
import maleITStaff from '@assets/cjis_stock_images9_1763930832082.jpg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-background to-accent/30 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            {/* Urgency banner */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-md px-3 py-1.5 mb-6" data-testid="banner-urgency">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">CJIS Security Policy 6.0 is now in effect — December 2024</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Operationalize CJIS 6.0 Compliance
              <span className="block text-primary mt-2">With One Purpose-Built Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              CJIS360 helps law enforcement agencies, courts, corrections organizations, noncriminal justice agencies, and service providers assess CJIS requirements, identify gaps, collect evidence, manage remediation, track training, and maintain continuous audit readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg gap-2"
                data-testid="button-hero-demo"
              >
                Request a Platform Demonstration
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg"
                data-testid="button-hero-explore-platform"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>

            {/* Platform login and trust statement */}
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                <a
                  href="https://cjis360.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Platform Login
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Built for organizations that access, process, transmit, store, or support Criminal Justice Information.
              </p>
            </div>

            {/* Quick trust signals */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0" />
                <span>No obligation — 30-minute consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Results within 5 business days</span>
              </div>
            </div>
          </div>

          {/* Right - Hexagonal Images */}
          <div className="relative h-[500px] hidden lg:block">
            <style>
              {`
                .hexagon-clip {
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
              `}
            </style>
            <div className="absolute top-0 right-32 w-64 h-64 hexagon-clip bg-muted overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={lawEnforcementAI}
                alt="Law enforcement professional with investigative AI interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 right-0 w-56 h-56 hexagon-clip bg-muted overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={femaleITStaff}
                alt="Female IT staff monitoring security systems"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-16 right-24 w-60 h-60 hexagon-clip bg-muted overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={maleITStaff}
                alt="Male IT staff monitoring compliance systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
