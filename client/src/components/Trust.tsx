import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const stats = [
  { value: '18,000', label: 'Agencies in CJIS 6.0 Scope' },
  { value: '25+', label: 'Agencies Engaged' },
  { value: '180+', label: 'CJIS 6.0 Controls Mapped' },
  { value: '1,300+', label: 'Policy Subcontrols in Scope' },
];

const testimonials = [
  {
    quote: 'CJIS360 found gaps in our access control implementation that our internal review had completely missed. Their assessment report gave us a clear remediation roadmap we could act on immediately.',
    author: 'Chief Michael Rodriguez',
    title: 'IT Director, Metro Police Department',
  },
  {
    quote: 'We brought in CJIS360 three months before our state audit. Their policy review and staff interviews identified seven control deficiencies. We remediated all of them and passed without a single finding.',
    author: 'Sarah Chen',
    title: 'Compliance Officer, County Sheriff\'s Office',
  },
  {
    quote: 'The Stop. Scrutinize. Verify. framework gave our team a structured way to think about compliance — not just as a checklist, but as an ongoing operational discipline. That shift in mindset has been invaluable.',
    author: 'James Patterson',
    title: 'Director of Security, State Law Enforcement Agency',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Agencies Nationwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small county departments to multi-agency task forces, we help organizations at every scale achieve defensible CJIS compliance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate transition-transform duration-300 hover:-translate-y-2"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-base leading-relaxed text-foreground" data-testid={`testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t">
                  <div className="font-semibold text-foreground" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
