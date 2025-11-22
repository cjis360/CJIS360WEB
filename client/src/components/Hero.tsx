import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-background to-accent/30 pt-20 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Comprehensive CJIS 6.0
              <span className="block text-primary mt-2">Compliance Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Helping law enforcement agencies achieve and maintain CJIS Security Policy compliance through expert guidance, risk assessments, and innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg gap-2"
                data-testid="button-hero-request-demo"
              >
                Request a Demo
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg"
                data-testid="button-hero-try-platform"
              >
                <a
                  href="https://cjis360.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the Platform
                </a>
              </Button>
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
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
                alt="Law enforcement officer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 right-0 w-56 h-56 hexagon-clip bg-muted overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                alt="Compliance officer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-16 right-24 w-60 h-60 hexagon-clip bg-muted overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
                alt="Security professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
