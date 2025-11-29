import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Agencies Protected' },
  { value: '10,000+', label: 'Assessments Completed' },
  { value: '99.9%', label: 'Compliance Rate' },
  { value: '25+', label: 'Years Experience' },
];

const testimonials = [
  {
    quote: 'CJIS360 transformed our compliance process. Their assessment platform streamlined our workflow and their expertise helped us identify critical gaps we had missed.',
    author: 'Chief Michael Rodriguez',
    title: 'IT Director, Metro Police Department',
  },
  {
    quote: 'The advisory services provided by CJIS360 were invaluable. They guided us through our first CJIS audit with confidence and we passed with flying colors.',
    author: 'Sarah Chen',
    title: 'Compliance Officer, County Sheriff\'s Office',
  },
  {
    quote: 'Outstanding support and deep knowledge of CJIS requirements. The platform makes ongoing compliance management efficient and transparent for our entire team.',
    author: 'James Patterson',
    title: 'Director of Security, State Law Enforcement Agency',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Agencies Nationwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of agencies that rely on CJIS360 for their compliance needs.
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
