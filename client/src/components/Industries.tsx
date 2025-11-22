import { Building2, Scale, Shield, Users, Building, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const industries = [
  {
    icon: Shield,
    title: 'Law Enforcement',
    description: 'Police departments, sheriffs offices, and state law enforcement agencies requiring CJIS compliance.',
  },
  {
    icon: Scale,
    title: 'Courts & Legal',
    description: 'Court systems, prosecutors offices, and legal entities handling criminal justice information.',
  },
  {
    icon: Building2,
    title: 'Government Agencies',
    description: 'State and local government departments with access to criminal justice data systems.',
  },
  {
    icon: Users,
    title: 'Private Security',
    description: 'Private security firms and contractors working with law enforcement agencies.',
  },
  {
    icon: Building,
    title: 'Corrections',
    description: 'Correctional facilities, probation departments, and rehabilitation services.',
  },
  {
    icon: Lock,
    title: 'Technology Vendors',
    description: 'Software and service providers serving the criminal justice sector.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized compliance solutions for organizations across the criminal justice ecosystem.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-transform duration-300 hover:-translate-y-2"
                data-testid={`card-industry-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center" data-testid={`industry-icon-${index}`}>
                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl" data-testid={`industry-title-${index}`}>{industry.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed" data-testid={`industry-description-${index}`}>
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
