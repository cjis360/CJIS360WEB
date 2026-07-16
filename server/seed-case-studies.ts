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
      title: "Statewide Law Enforcement Agency Strengthens CJIS 6.0 Readiness",
      slug: "statewide-police-cjis-compliance",
      clientName: "A State Law Enforcement Agency",
      clientType: "State Law Enforcement Agency",
      industry: "Law Enforcement",
      challenge: "A large state law enforcement agency was managing CJIS 6.0 compliance across 50+ precincts with inconsistent security policies, outdated access controls, and fragmented training programs. Annual audits revealed gaps in mobile device security and incident response procedures that needed to be addressed.",
      solution: "CJIS360 conducted a comprehensive compliance assessment across all precincts, implemented unified security policies, deployed automated monitoring systems, and delivered role-based training to 1,200+ personnel. Our platform centralized policy management and provided compliance dashboards to improve visibility and coordination.",
      results: [
        "Meaningfully improved CJIS compliance across all precincts",
        "Significantly reduced critical security findings in audit reviews",
        "Consolidated security policies and procedures across locations",
        "Reduced time spent on manual compliance documentation",
        "Improved compliance coordination across all precincts"
      ],
      testimonial: undefined,
      testimonialAuthor: undefined,
      testimonialRole: undefined,
      metrics: [
        "50+ Precincts Unified",
        "1,200+ Personnel Trained",
        "6 Month Implementation",
        "Improved Audit Readiness"
      ],
      tags: ["State Agency", "Compliance", "Multi-Site", "Training"]
    },
    {
      title: "County Law Enforcement Implements Secure Mobile Access Program",
      slug: "county-sheriff-mobile-security",
      clientName: "A County Sheriff's Office",
      clientType: "County Law Enforcement",
      industry: "Law Enforcement",
      challenge: "A county sheriff's office with 300+ deputies using mobile devices in the field to access CJIS data faced significant security risks. Existing mobile device management was inadequate, and there was no clear policy for BYOD scenarios or encrypted communications.",
      solution: "CJIS360 designed and implemented a comprehensive mobile security program including MDM deployment, encrypted communication protocols, secure containerization for CJIS data, and clear BYOD policies. The program included monitoring capabilities and audit trail functionality for mobile CJIS access.",
      results: [
        "Successfully secured 300+ mobile devices under CJIS standards",
        "Implemented encryption for data in transit and at rest",
        "Improved mobile security posture and audit trail capabilities",
        "Enhanced field data access with improved security controls",
        "Streamlined mobile CJIS access tracking and accountability"
      ],
      testimonial: undefined,
      testimonialAuthor: undefined,
      testimonialRole: undefined,
      metrics: [
        "300+ Devices Secured",
        "Encryption Implemented",
        "18 Month Deployment",
        "Field Ops Enhanced"
      ],
      tags: ["Mobile Security", "County Agency", "MDM", "Field Operations"]
    },
    {
      title: "Regional Fusion Center Coordinates Multi-Agency Compliance Framework",
      slug: "fusion-center-multi-agency-compliance",
      clientName: "A Regional Fusion Center",
      clientType: "Multi-Agency Intelligence Center",
      industry: "Intelligence & Law Enforcement",
      challenge: "A regional fusion center coordinates intelligence sharing across 12 law enforcement agencies, each with different compliance maturity levels. Ensuring consistent CJIS compliance while facilitating information sharing was a challenge, complicated by varying IT infrastructures across participating agencies.",
      solution: "CJIS360 implemented a federated compliance framework that respected each agency's autonomy while supporting unified CJIS standards. The solution included shared security controls, inter-agency coordination protocols, standardized access procedures, and centralized monitoring of compliance across participants.",
      results: [
        "Coordinated 12 agencies on aligned CJIS compliance standards",
        "Meaningfully improved inter-agency data sharing efficiency",
        "Implemented centralized compliance visibility across participants",
        "Streamlined documentation and audit coordination",
        "Enhanced information sharing with improved security controls"
      ],
      testimonial: undefined,
      testimonialAuthor: undefined,
      testimonialRole: undefined,
      metrics: [
        "12 Agencies Coordinated",
        "Shared Compliance Framework",
        "Unified Audit Process",
        "Enhanced Coordination"
      ],
      tags: ["Multi-Agency", "Fusion Center", "Intelligence", "Federated Security"]
    },
    {
      title: "Municipal Police Department Establishes CJIS Compliance Program",
      slug: "municipal-police-first-audit-success",
      clientName: "A Municipal Police Department",
      clientType: "Municipal Police Department",
      industry: "Law Enforcement",
      challenge: "A mid-sized municipal agency with 150 officers had no formal CJIS compliance program and faced an audit within 90 days. The agency needed to rapidly establish compliance controls and processes to address identified gaps.",
      solution: "CJIS360 executed an intensive 90-day engagement: conducted comprehensive gap analysis, implemented security controls, established access management protocols, created compliance documentation, and delivered staff training. The program provided foundational compliance processes and ongoing support.",
      results: [
        "Significantly reduced critical compliance findings",
        "Established comprehensive security policies and procedures",
        "Trained 150+ personnel on CJIS compliance requirements",
        "Implemented security controls across systems and processes",
        "Created foundation for ongoing compliance management"
      ],
      testimonial: undefined,
      testimonialAuthor: undefined,
      testimonialRole: undefined,
      metrics: [
        "90 Day Program",
        "Findings Reduced",
        "150+ Personnel Trained",
        "Program Established"
      ],
      tags: ["Municipal Agency", "Rapid Implementation", "Compliance Program", "Training"]
    }
  ];

  await db.insert(caseStudies).values(caseStudiesToSeed);
  console.log(`Seeded ${caseStudiesToSeed.length} case studies`);

  await pool.end();
}

seedCaseStudies().catch(console.error);
