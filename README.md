# Hemapriya Ramesh - Creative Portfolio

A modern, responsive portfolio website for Hemapriya Ramesh, a social media strategist with 4+ years of experience across fashion, jewelry, and food brands.

## Project Overview

**Framework**: Next.js 16 with App Router  
**Styling**: Tailwind CSS with custom design tokens  
**Animations**: Framer Motion  
**Type Safety**: TypeScript  
**Form**: Nodemailer for email submissions  
**Icons**: React Icons

## Features

- Fully responsive mobile-first design
- Smooth scroll animations with Framer Motion
- 5+ case studies with project galleries
- Contact form with email integration
- Dark/Light section contrast
- Optimized performance with static pre-rendering

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd hema
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Production Build

```bash
npm run build
npm start
```

## Environment Setup

Create `.env.local` in the project root with SMTP credentials for the contact form to work:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_FROM_EMAIL="Portfolio Contact <your_email@gmail.com>"
CONTACT_TO_EMAIL=hemapriyaramesh2518@gmail.com
```

**Note**: Generate an App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

## Project Structure

```
app/
├── api/contact/route.ts      Email form handler
├── components/               UI components (Hero, About, Skills, etc)
├── content/portfolio.ts      Portfolio data
├── fonts.ts                  Custom fonts
├── globals.css               Design tokens & responsive overrides
└── page.tsx                  Home page

public/images/               Image assets organized by project
```

## Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Connected Deployment

1. Push code to GitHub
2. Connect repo to [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Auto-deploys on push to main

**vercel.json** contains deployment configuration with:
- Build command: `npm run build`
- Output directory: `.next`
- Security headers for production
- Image caching rules

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari 12+, Chrome for Android)

## Performance Optimizations

- Static pre-rendering for case study pages
- Image optimization via Next.js Image component
- Tailwind CSS production purging
- Code splitting and lazy loading
- Gzip compression enabled on Vercel

## License

Proprietary © Hemapriya Ramesh. All rights reserved.


**Designed and developed by** [Chezhiyansathish](https://chezhiyansathish.vercel.app/)
