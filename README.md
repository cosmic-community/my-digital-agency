# My Digital Agency

![App Preview](https://imgix.cosmicjs.com/cc410030-173a-11f1-8f19-f3dd3ee2f907-autopilot-photo-1544005313-94ddf0286df2-1772567672653.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautifully designed website for a digital agency offering AI-powered web development and workflow automation services. Built with Next.js 16 and Cosmic CMS, featuring dynamic content management for services, portfolio works, team members, and client testimonials.

## Features

- 🏠 **Dynamic Homepage** with hero section, featured content sections, and testimonial carousel
- ⚙️ **Services Showcase** with detailed service cards, emoji icons, and featured images
- 🎨 **Portfolio Gallery** with service-based filtering and individual project pages
- 👥 **Team Profiles** with photos, bios, roles, and LinkedIn links
- 💬 **Client Testimonials** with avatars, companies, and animated quote cards
- 🌙 **Dark-themed modern design** with gradient accents and glassmorphism effects
- 📱 **Fully responsive** across all device sizes
- ⚡ **Server-side rendering** for optimal performance and SEO
- 🔒 **Secure server-side** Cosmic SDK integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69a73c247c408c87bf4c3cfe&clone_repository=69a73d77fa2ad19da1889149)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a creative agency website with portfolio work, services, team members, and client testimonials.
>
> User instructions: A digital agency offering AI webdev and workflow services."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Digital Agency'. The content is managed in Cosmic CMS with the following object types: services, team-members, portfolio-works, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A digital agency offering AI webdev and workflow services."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI component library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk) — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a configured bucket

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-digital-agency
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Portfolio with Related Services
```typescript
const { objects: works } = await cosmic.objects
  .find({ type: 'portfolio-works' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes connected service data
```

## Cosmic CMS Integration

This app uses 4 content types:
- **Services** (`services`) — Agency service offerings with icons and descriptions
- **Team Members** (`team-members`) — Staff profiles with photos, bios, and social links
- **Portfolio Works** (`portfolio-works`) — Project showcases with images and related services
- **Testimonials** (`testimonials`) — Client reviews with avatars and company info

All content is fetched server-side using Next.js Server Components for optimal performance and security.

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

### Netlify
1. Push to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->