# CJIS360 Marketing Website Design Guidelines

## Design Approach: Professional Authority + Trust
**Selected Approach:** Reference-based drawing from enterprise SaaS (Stripe's restraint + government portal credibility)

**Core Principles:**
- Authoritative professionalism for law enforcement audience
- Trust and credibility through clean, structured layouts
- Accessibility and clarity over decorative elements
- Structured information hierarchy for compliance-focused content

---

## Typography System

**Font Family:** Inter (already implemented via Google Fonts)

**Hierarchy:**
- **H1 (Hero):** text-5xl/6xl, font-bold, leading-tight
- **H2 (Section Titles):** text-4xl, font-bold, mb-4
- **H3 (Card Titles):** text-2xl, font-semibold
- **Body Large:** text-xl, text-gray-600, leading-relaxed
- **Body:** text-base, text-gray-700
- **Small/Caption:** text-sm, text-gray-600

---

## Layout & Spacing System

**Spacing Primitives:** Use Tailwind units of **4, 6, 8, 12, 16, 20, 24**
- Component padding: p-6, p-8
- Section padding: py-20, py-24
- Element gaps: gap-4, gap-6, gap-8, gap-12
- Container max-width: max-w-7xl

**Grid Patterns:**
- Desktop: grid-cols-2 (lg:grid-cols-3 for cards)
- Mobile: Always single column
- Consistent 12-column system with gap-8 for multi-element sections

---

## Core Components

### Hero Section
- **Layout:** Two-column (content left, visuals right)
- **Height:** Natural content height, ~pt-20 pb-32
- **Background:** Subtle gradient from white to blue-50 with decorative blur circles
- **Hexagonal Images:** 3 staggered hexagons (already implemented) with law enforcement imagery
- **CTAs:** Primary (Request Demo) + Secondary (Try Platform) with arrow icon
- **Image Treatment:** Hexagon clip-path with shadow-xl and subtle hover:scale-105

### Services Section
- **Layout:** 4-column grid (lg:grid-cols-2 on tablet, single on mobile)
- **Cards:** White background, rounded-xl, p-8, shadow-sm, service-card hover effect
- **Icons:** Lucide icons at 40x40, text-primary-700
- **Spacing:** py-24 section padding
- **Structure:** Icon top, title, description, optional arrow link

### Industries Section
- **Layout:** 3-column grid with industry cards
- **Visual Treatment:** Icons or small representative images
- **Cards:** Similar to services but with industry-specific imagery
- **Content:** Law Enforcement, Courts & Legal, Government Agencies, Private Security, etc.

### Trust/Social Proof Section
- **Layout:** Stats bar (3-4 columns) + testimonial grid (2-column)
- **Stats:** Large numbers (text-4xl font-bold), label underneath
- **Testimonials:** Quote text, author name/title/agency, optional photo
- **Background:** Light blue-50 or gray-50 to separate from white sections

### Contact/CTA Section
- **Layout:** Centered content with form OR two-column (info left, form right)
- **Form Fields:** Full name, email, agency name, phone, message
- **Input Styling:** border-gray-300, rounded-lg, p-3, focus:border-primary-700 focus:ring-1
- **Submit Button:** bg-primary-700, full width or auto, with loading state consideration

### Footer
- **Layout:** 4-column grid (Company, Services, Resources, Contact)
- **Structure:** Logo section, navigation columns, bottom bar with copyright/legal
- **Background:** bg-gray-900 with white text for contrast
- **Spacing:** py-16, gap-8 between columns

---

## Images Strategy

**Hero Images:** YES - Large hero with hexagonal composite layout
- Use professional law enforcement/compliance imagery
- 3 hexagonal frames showing: officers, compliance professionals, security operations
- High-quality, professional stock photos emphasizing trust and professionalism

**Section Images:**
- **Services:** Icon-based (no photos, use Lucide icons)
- **Industries:** Small circular industry icons or representative imagery
- **Trust:** Headshots for testimonials (circular, 80x80)
- **About (if added):** Team photo or office imagery

**Image Descriptions:**
1. **Hero Hexagon 1:** Law enforcement officer in professional setting
2. **Hero Hexagon 2:** Professional at computer working on compliance documentation
3. **Hero Hexagon 3:** Security operations center or professional consultation scene
4. **Testimonial Photos:** Professional headshots of agency representatives

---

## Component Enrichment

### Header Enhancement
- Sticky positioning with shadow on scroll
- Trust indicator: Small badge "Trusted by 200+ Agencies" near logo
- Dual CTAs: Platform Login (text link) + Get Started (button)

### Footer Enrichment
- **4 Columns:** About/Company, Solutions, Resources, Contact Info
- Newsletter signup section with inline form
- Social proof: "CJIS Certified Partner" badge
- Secondary navigation for Privacy Policy, Terms, Security
- Contact details: Email, phone, address for credibility

### Trust Section Elements
- Client agency logos (grayscale, 6-8 logos)
- Certification badges (FBI CJIS compliance, security certifications)
- Key metrics: "200+ Agencies Protected", "50,000+ Assessments", "99.9% Compliance Rate"
- 2-3 testimonial cards with full quotes

---

## Visual Polish

**Shadows:** Use shadow-sm for cards, shadow-xl for elevated elements
**Borders:** Minimal use, border-gray-200 when needed
**Transitions:** transition duration-300 for hover states
**Hover States:** translateY(-8px) for cards, bg changes for buttons
**Focus States:** Always include focus:ring-2 focus:ring-primary-500 for accessibility

**Avoid:** Heavy animations, distracting movements - maintain professional demeanor throughout