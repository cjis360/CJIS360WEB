import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { caseStudies } from "@shared/schema";

async function seedCaseStudies() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is required");
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  console.log("Seeding case studies...");

  const caseStudiesToSeed = [
    {
      title: "Statewide Police Department Achieves Full CJIS Compliance",
      slug: "statewide-police-cjis-compliance",
      clientName: "Metro State Police Department",
      clientType: "State Law Enforcement Agency",
      industry: "Law Enforcement",
      challenge: "Metro State Police Department was struggling to maintain CJIS 6.0 compliance across 50+ precincts with inconsistent security policies, outdated access controls, and fragmented training programs. Annual audits revealed critical gaps in mobile device security and incident response procedures.",
      solution: "CJIS360 conducted a comprehensive compliance assessment across all precincts, implemented unified security policies, deployed automated monitoring systems, and delivered role-based training to 1,200+ personnel. Our platform centralized policy management and provided real-time compliance dashboards.",
      results: [
        "100% CJIS compliance achieved within 6 months",
        "Zero critical findings in annual FBI audit",
        "75% reduction in security policy violations",
        "90% decrease in time spent on compliance documentation",
        "Unified security posture across all 50+ precincts"
      ],
      testimonial: "CJIS360 transformed our compliance program from a burden into a strategic advantage. Their platform made it easy to maintain consistency across our entire organization, and their team's expertise was invaluable during our FBI audit.",
      testimonialAuthor: "Chief Sarah Martinez",
      testimonialRole: "Chief Information Security Officer",
      metrics: [
        "50+ Precincts Unified",
        "1,200+ Personnel Trained",
        "6 Month Implementation",
        "Zero Audit Findings"
      ],
      tags: ["State Agency", "Full Compliance", "Multi-Site", "Training"]
    },
    {
      title: "County Sheriff's Office Secures Mobile Workforce",
      slug: "county-sheriff-mobile-security",
      clientName: "Riverside County Sheriff's Office",
      clientType: "County Law Enforcement",
      industry: "Law Enforcement",
      challenge: "With 300+ deputies using mobile devices in the field to access CJIS data, Riverside County Sheriff's Office faced significant security risks. Existing mobile device management was inadequate, and there was no clear policy for BYOD scenarios or encrypted communications.",
      solution: "CJIS360 designed and implemented a comprehensive mobile security program including MDM deployment, encrypted communication protocols, secure containerization for CJIS data, and clear BYOD policies. We also established remote wipe capabilities and real-time device monitoring.",
      results: [
        "300+ mobile devices secured under CJIS standards",
        "100% encryption compliance for data in transit and at rest",
        "Zero mobile-related security incidents in 18 months",
        "50% faster field data access with improved security",
        "Complete audit trail for all mobile CJIS access"
      ],
      testimonial: "Our deputies needed secure mobile access to CJIS data without compromising security. CJIS360 delivered a solution that actually improved both security and productivity. The FBI auditors were impressed with our mobile security controls.",
      testimonialAuthor: "Sheriff James Rodriguez",
      testimonialRole: "County Sheriff",
      metrics: [
        "300+ Devices Secured",
        "100% Encryption",
        "18 Months Zero Incidents",
        "50% Faster Access"
      ],
      tags: ["Mobile Security", "County Agency", "MDM", "Field Operations"]
    },
    {
      title: "Regional Fusion Center Streamlines Multi-Agency Compliance",
      slug: "fusion-center-multi-agency-compliance",
      clientName: "Northeast Regional Fusion Center",
      clientType: "Multi-Agency Intelligence Center",
      industry: "Intelligence & Law Enforcement",
      challenge: "The Northeast Regional Fusion Center coordinates intelligence sharing across 12 law enforcement agencies, each with different compliance maturity levels. Ensuring consistent CJIS compliance while facilitating seamless information sharing was a major challenge, complicated by varying IT infrastructures.",
      solution: "CJIS360 implemented a federated compliance framework that respected each agency's autonomy while ensuring unified CJIS standards. We deployed shared security controls, established inter-agency agreements, created standardized access protocols, and built a centralized compliance monitoring dashboard.",
      results: [
        "12 agencies brought to uniform CJIS compliance level",
        "85% reduction in inter-agency data sharing delays",
        "Centralized compliance monitoring across all participants",
        "Simplified FBI audit process with unified documentation",
        "Enhanced threat intelligence sharing with maintained security"
      ],
      testimonial: "Managing CJIS compliance across multiple agencies seemed impossible until CJIS360 showed us how. Their federated approach respected each agency's independence while ensuring we all met the same high standards. Information sharing is now faster and more secure.",
      testimonialAuthor: "Director Michael Chen",
      testimonialRole: "Fusion Center Director",
      metrics: [
        "12 Agencies Unified",
        "85% Faster Sharing",
        "Single Audit Process",
        "Zero Security Breaches"
      ],
      tags: ["Multi-Agency", "Fusion Center", "Intelligence", "Federated Security"]
    },
    {
      title: "Municipal Police Department Passes First FBI Audit",
      slug: "municipal-police-first-audit-success",
      clientName: "Oakdale Police Department",
      clientType: "Municipal Police Department",
      industry: "Law Enforcement",
      challenge: "Oakdale Police Department, a mid-sized agency with 150 officers, had never undergone an FBI CJIS audit and had no formal compliance program. With an audit scheduled in 90 days, they faced potential loss of CJIS access and severe operational disruption.",
      solution: "CJIS360 executed a rapid 90-day compliance sprint: conducted emergency gap analysis, implemented critical security controls, established access management protocols, created comprehensive documentation, and delivered intensive staff training. We provided on-site support during the actual audit.",
      results: [
        "Zero critical findings in first FBI audit",
        "Full CJIS compliance achieved in 90 days",
        "Comprehensive security policy framework established",
        "150+ personnel trained and certified",
        "Ongoing compliance program for future audits"
      ],
      testimonial: "We were facing an FBI audit with no compliance program in place. CJIS360's team worked miracles in 90 days. Not only did we pass the audit, but we now have a sustainable compliance program that gives us confidence for the future.",
      testimonialAuthor: "Chief Robert Thompson",
      testimonialRole: "Chief of Police",
      metrics: [
        "90 Day Sprint",
        "Zero Critical Findings",
        "150 Personnel Certified",
        "First Audit Success"
      ],
      tags: ["Municipal Agency", "Rapid Implementation", "Audit Preparation", "Emergency Response"]
    }
  ];

  await db.insert(caseStudies).values(caseStudiesToSeed);
  console.log(`Seeded ${caseStudiesToSeed.length} case studies`);

  await pool.end();
}

seedCaseStudies().catch(console.error);
