import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ssvImage from '@assets/Stop_Scritinize_verify_Framework_03-2026_1775308807269.jpeg';

const phases = [
  {
    step: 'STOP',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/30',
    borderColor: 'border-red-200 dark:border-red-800',
    headline: 'Validation of Request Parameters',
    description:
      'Upon any initial request or event — such as an access attempt or data movement — the process pauses for a cautionary check. We assess urgency and legitimacy, identify red flags, and enforce CJIS 6.0 access control requirements at the perimeter.',
    tasks: [
      'Assess urgency and legitimacy of the request',
      'Identify contextual anomalies and red flags',
      'Halt unauthorized access at the perimeter',
    ],
  },
  {
    step: 'SCRUTINIZE',
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
    headline: 'Deep Analysis & Risk Assessment',
    description:
      'A technical deep-dive using NIST RMF 800-37 guidance to analyze the process flow. We validate source integrity, map data connections to internal systems, and evaluate each request against applicable regulations including CJIS, CCPA/CPRA, and HIPAA.',
    tasks: [
      'Validate data source integrity and authentication',
      'Map connections and visualize data interactions',
      'Analyze risk context against specific regulations',
    ],
  },
  {
    step: 'VERIFY',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    headline: 'Global Compliance Certification',
    description:
      'Transition from assessment to a "Compliance Approved" certified output. We cross-reference against ISO 27001, PCI-DSS, and SOX requirements, then generate the formal documentation and verified reports required for FBI CJIS regulatory audits.',
    tasks: [
      'Cross-standard verification across frameworks',
      'Generate certified compliance documentation',
      'Produce immutable, audit-ready records',
    ],
  },
];

export default function SSVFramework() {
  return (
    <section id="ssv-framework" className="py-24 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Our Proprietary Methodology
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Stop. Scrutinize. Verify.™ Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A rigorous GRC methodology engineered for high-stakes data environments like CJIS 6.0. By integrating NIST 800-37, HIPAA, and GDPR standards, we transition organizations from passive security awareness to active, documented compliance certification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — framework image */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={ssvImage}
              alt="Stop. Scrutinize. Verify. Framework diagram"
              className="w-full max-w-md rounded-md border border-border shadow-sm"
              data-testid="img-ssv-framework"
            />
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              The SSV™ framework serves as the logic engine behind every CJIS360 assessment, providing a standardized path from initial review to certified compliance output.
            </p>
          </div>

          {/* Right — three phase cards */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`rounded-md border p-6 ${phase.bgColor} ${phase.borderColor}`}
                data-testid={`card-ssv-phase-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-background flex items-center justify-center border border-border">
                    <span className={`text-sm font-bold ${phase.color}`}>{index + 1}</span>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${phase.color}`}>
                      {phase.step}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {phase.headline}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {phase.description}
                    </p>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${phase.color}`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <Button asChild data-testid="button-ssv-learn-more">
                <a href="/services" className="inline-flex items-center gap-2">
                  See How We Apply This Framework
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
