# CJIS360 Marketing Website

## Overview

CJIS360 is a marketing website for a CJIS 6.0 compliance solutions platform targeting law enforcement agencies. The site provides information about compliance services, risk assessments, advisory services, and an interactive assessment platform. The application is a full-stack React + Express application with form submission capabilities for contact inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Design System**: "New York" style variant with Inter font family
- **Theme Support**: Light/dark mode with system preference detection and localStorage persistence
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

**Design Principles**:
- Professional authority aesthetic targeting law enforcement audience
- Accessibility-first approach with ARIA labels and semantic HTML
- Mobile-responsive grid layouts (single column mobile, multi-column desktop)
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20, 24)

**Page Structure**:
- **Home (/)**: Single-page with smooth scroll navigation including Hero, Services, Industries, Trust/Testimonials, and Contact sections
- **Services (/services)**: Standalone page with comprehensive service offerings, market positioning, core value proposition, and differentiators
- **Industries (/industries)**: Dedicated page showcasing all sectors served (Law Enforcement, Courts, Government, Private Security, Corrections, Technology Vendors)
- **Resources (/resources)**: Hub page linking to Blog and Case Studies with featured topics
- **About (/about)**: Company information including mission, team expertise across CJIS areas, and core values
- **Contact (/contact)**: Dedicated contact page with form and detailed contact information
- **Privacy (/privacy)**: Comprehensive privacy policy aligned with CJIS compliance requirements
- **Blog (/blog)**: Blog listing page with 5 seeded CJIS compliance articles
- **Blog Post (/blog/:slug)**: Individual blog post pages with Markdown rendering
- **Case Studies (/case-studies)**: Case studies listing with industry filtering
- **Case Study Detail (/case-studies/:slug)**: Individual case study pages
- Sticky header with navigation and theme toggle across all pages

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Module System**: ES Modules
- **Development Server**: Vite dev server with HMR in development
- **Production Server**: Static file serving from dist/public
- **Session Management**: In-memory storage (MemStorage class) for development
- **API Design**: RESTful endpoints under `/api` prefix

**Storage Layer**:
- Interface-based storage abstraction (IStorage)
- Current implementation: In-memory storage (MemStorage)
- Designed for future database integration via Drizzle ORM
- Schema defined with PostgreSQL compatibility in mind

**API Endpoints**:
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact` - Retrieve all submissions (admin)

**Validation**:
- Zod schemas for runtime validation
- Shared schema definitions between client and server
- User-friendly error messages via zod-validation-error

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL
- Schema location: `shared/schema.ts`
- Migration output: `./migrations`

**Tables**:

1. **users**: Authentication placeholder
   - id (UUID, primary key)
   - username (text, unique)
   - password (text)

2. **contact_submissions**: Lead capture
   - id (UUID, primary key)
   - full_name (text, required)
   - email (text, required, validated)
   - agency_name (text, required)
   - phone (text, optional)
   - message (text, required)
   - created_at (timestamp, auto)

3. **blog_posts**: Blog articles
   - id (UUID, primary key)
   - title (text, required)
   - slug (text, unique, required)
   - content (text, required, Markdown format)
   - excerpt (text, required)
   - category (text, required)
   - published_at (timestamp, required)
   - created_at (timestamp, auto)

4. **case_studies**: Success stories
   - id (UUID, primary key)
   - title (text, required)
   - slug (text, unique, required)
   - client_name (text, required)
   - industry (text, required)
   - challenge (text, required)
   - solution (text, required)
   - results (text, required)
   - metrics (jsonb, optional)
   - published_at (timestamp, required)
   - created_at (timestamp, auto)

**Design Decision**: Database schema is defined but the application currently uses in-memory storage. This allows rapid development while maintaining a clear migration path to PostgreSQL when needed.

## External Dependencies

### UI Component Library
- **shadcn/ui**: Pre-built accessible components based on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library for consistent iconography

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge & clsx**: Conditional class name utilities

### Forms & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form

### Data Fetching
- **TanStack Query**: Server state management with caching
- **date-fns**: Date manipulation utilities

### Database (Configured but not actively used)
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- Connection string expected via `DATABASE_URL` environment variable

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across the stack
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Build & Deployment
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

**Note**: The application is structured to easily transition from in-memory storage to PostgreSQL by implementing a new storage class that conforms to the IStorage interface.