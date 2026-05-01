# Senko UI Showcase & Documentation

A modern, premium component library built with Next.js, Tailwind CSS, and Framer Motion for high-growth SaaS and AI interfaces.

## Overview

**Senko UI** is a signature collection of copy-paste React components designed for the premium web. This project serves as both a live showcase and comprehensive documentation site for the Senko UI component library, demonstrating professional-grade UI elements for SaaS and AI applications.

Recently completely redesigned, the landing experience now features a pristine, Vercel/Linear-inspired aesthetic with perfectly aligned Bento grids, subtle geometrical backgrounds, and the "Senko Studio" interactive component playground.

Built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**, these components prioritize minimalist aesthetics, high-performance motion, and developer experience.

## Features

- **Premium Design Language**: Signature components that make applications feel expensive and forward-thinking, inspired by Vercel and Linear aesthetics
- **Senko Studio Showcase**: A highly detailed, live visual workspace demonstration combining multiple components into a cohesive UI
- **Responsive Navigation**: State-of-the-art glassmorphism top navigation with Framer Motion dropdowns and mobile drawers
- **60fps Animations**: Native Framer Motion integrations for fluid, responsive interactions
- **Fully Themeable**: Tailwind-first approach with CSS variables and utility classes
- **Accessibility First**: Built on Radix UI primitives with full keyboard and screen-reader support
- **Type-Safe Development**: Complete TypeScript coverage for robust developer experience
- **Documentation-Driven**: Comprehensive docs built with Fumadocs for easy component discovery and usage
- **Shadcn/UI Compatible**: Integrates seamlessly with the shadcn/ui ecosystem

## Components

Senko UI includes a curated set of premium components for modern web applications:

- **Android Mockup**: Display Android device previews
- **Aurora Button**: Animated button with aurora effects
- **Bento Grid**: Flexible grid layout component
- **Beveled Border Button**: Button with beveled border styling
- **Carousel**: Interactive image or content carousel
- **Component Preview**: Preview wrapper for components
- **Glass Card**: Glassmorphism card component
- **Glass Container**: Glassmorphism container
- **Glass Dock**: Glassmorphism dock navigation
- **Glass Login**: Glassmorphism login form
- **Hero Highlighter**: Highlighting component for hero sections
- **Highlight Text**: Text highlighting utility
- **Iconic Heading**: Styled heading with icons
- **iPhone Mockup**: iPhone device preview
- **iPhone SaaS Preview**: SaaS-focused iPhone mockup
- **Laptop Mockup**: Laptop device preview
- **Light Trail Badge**: Badge with light trail animation
- **Mesh Gradient**: Gradient background component
- **Open in V0 Button**: Button to open in V0 editor
- **Pill Navbar**: Pill-shaped navigation bar
- **Safari Showcase**: Safari browser showcase
- **Safari View**: Safari browser view component
- **Theme Toggle**: Dark/light theme switcher
- **Underlined Heading**: Heading with underline styling
- **Wavy Grid Background**: Animated wavy grid background

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router and Server Components |
| **React** | 19.2.4 | UI library with concurrent features |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Framer Motion** | 12.34.3 | Physics-based animations |
| **Radix UI** | 1.4.3 | Accessible UI primitives |
| **Lucide React** | 0.575.0 | Consistent iconography |
| **Fumadocs** | 16.6.9 | Documentation framework |
| **Shadcn/UI** | 3.8.5 | Component registry system |
| **Zod** | 4.3.6 | Schema validation |
| **Class Variance Authority** | 0.7.1 | Component variant management |

## Installation & Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd senko-ui
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the component showcase.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
test-nxt/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── search/               # Search API endpoint
│   ├── docs/                     # Documentation pages
│   │   ├── layout.tsx            # Docs layout
│   │   └── [[...slug]]/          # Dynamic docs routing
│   ├── iphone-preview/           # iPhone mockup preview page
│   ├── mac-preview/              # Mac mockup preview page
│   ├── test/                     # Test/demo page
│   ├── bento-grid-example.tsx    # Bento grid example page
│   ├── globals.css               # Global Tailwind styles
│   ├── layout.tsx                # Root layout with theme provider
│   └── page.tsx                  # Home showcase page
├── components/                   # React components
│   ├── ui/                       # Shadcn/UI base components
│   │   ├── button.tsx            # Button component
│   │   ├── input.tsx             # Input component
│   │   └── label.tsx             # Label component
│   ├── previews/                 # Preview wrapper components
│   │   ├── background/           # Background effect previews
│   │   ├── component-previews/   # Component showcase wrappers
│   │   ├── device-previews/      # Device mockup previews
│   │   └── text-effects/         # Text effect previews
│   ├── test-components/          # Development test components
│   ├── android-mockup.tsx        # Android device mockup
│   ├── aurora-button.tsx         # Animated aurora effect button
│   ├── bento-grid.tsx            # Flexible grid layout system
│   ├── BeveledBorderButton.tsx   # 3D beveled border button
│   ├── carousel.tsx              # Interactive carousel component
│   ├── ComponetPreview.tsx       # Component preview wrapper
│   ├── glass-card.tsx            # Glass morphism card
│   ├── glass-container.tsx       # Glass morphism container
│   ├── glass-dock.tsx            # Glass morphism dock navigation
│   ├── glass-login.tsx           # Glass morphism login form
│   ├── heroHighlighter.tsx       # Hero section highlighter
│   ├── highlightText.tsx         # Text highlighting component
│   ├── Icon-ic-Heading.tsx       # Iconic heading component
│   ├── iconic-heading-example.tsx # Iconic heading example
│   ├── iphone-mockup.tsx         # iPhone device mockup
│   ├── iphone-saas-preview.tsx   # iPhone SaaS app preview
│   ├── LightTrailBadge.tsx       # Light trail animated badge
│   ├── MeshGradient.tsx          # Mesh gradient background
│   ├── open-in-v0-button.tsx     # Open in v0 editor button
│   ├── PillNavbar.tsx            # Pill-shaped navigation bar
│   ├── safari-showcase.tsx       # Safari browser showcase
│   ├── safari-view.tsx           # Safari browser view
│   ├── theme-toggle.tsx          # Dark/light theme toggle
│   ├── underlined-heading.tsx    # Underlined heading component
│   └── WavyGridBackground.tsx    # Wavy grid background effect
├── content/                      # Documentation content
│   └── docs/                     # Fumadocs MDX content
│       ├── index.mdx             # Introduction page
│       ├── meta.json             # Docs navigation config
│       ├── backgrounds/          # Background components docs
│       ├── components/           # Component documentation
│       │   ├── aurora-button.mdx # Aurora button docs
│       │   ├── bento-grid.mdx    # Bento grid docs
│       │   ├── glass-dock.mdx    # Glass dock docs
│       │   ├── light-trail-button.mdx # Light trail button docs
│       │   ├── meta.json         # Components navigation
│       │   └── navbar.mdx        # Navbar docs
│       ├── device-mocks/         # Device mockup docs
│       └── text/                 # Text effect docs
├── lib/                         # Utility libraries
│   ├── layout.shared.tsx        # Shared layout utilities
│   ├── source.ts                # Fumadocs source config
│   └── utils.ts                 # General utilities (cn, etc.)
├── public/                      # Static assets
│   └── (empty)                  # Static files directory
├── components.json              # Shadcn/UI configuration
├── eslint.config.mjs            # ESLint configuration
├── mdx-components.tsx           # MDX component overrides
├── next-env.d.ts               # Next.js TypeScript declarations
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # This file
├── source.config.ts            # Fumadocs configuration
└── tsconfig.json               # TypeScript configuration
```

## Components Documentation

### Core Signature Components

#### Layout & Grid Systems
- **BentoGrid**: A flexible, responsive grid system for creating bento box layouts. Supports custom aspect ratios, hover effects, and content cards.
- **Carousel**: Interactive carousel with smooth animations, touch support, and customizable navigation.

#### Glass Morphism Suite
- **GlassCard**: Translucent card with backdrop blur effects
- **GlassContainer**: Container component with glass morphism styling
- **GlassDock**: MacOS-style dock navigation with glass effects
- **GlassLogin**: Login form with glass morphism design

#### Navigation Components
- **PillNavbar**: Modern pill-shaped navigation bar with smooth transitions
- **GlassDock**: Glass morphism dock for app navigation

#### Interactive Elements
- **AuroraButton**: Animated button with aurora light effects
- **BeveledBorderButton**: 3D beveled border button with depth
- **LightTrailBadge**: Animated badge with light trail effects
- **OpenInV0Button**: Button to open components in v0 editor

#### Text & Typography
- **IconicHeading**: Heading component with integrated icons
- **UnderlineHeading**: Heading with animated underline effects
- **HighlightText**: Text highlighting component
- **HeroHighlighter**: Hero section text highlighting

#### Background Effects
- **WavyGridBackground**: Animated wavy grid background
- **MeshGradient**: Dynamic mesh gradient background

#### Device Mockups
- **IPhoneMockup**: iPhone device mockup component
- **AndroidMockup**: Android device mockup component
- **IPhoneSaaSPreview**: iPhone preview for SaaS applications
- **SafariShowcase**: Safari browser showcase component
- **SafariView**: Safari browser view component

### Shadcn/UI Base Components

The project includes standard shadcn/ui components:
- **Button**: Customizable button with variants
- **Input**: Form input component
- **Label**: Form label component

### Preview System

Components are organized in preview categories:
- **Background Previews**: Showcase background effects
- **Component Previews**: Individual component demonstrations
- **Device Previews**: Device mockup showcases
- **Text Effects**: Typography and text animation previews

## Development Workflow

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with MDX processing |
| `pnpm build` | Build project for production (includes MDX compilation) |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality |

### Adding New Components

1. **Using Shadcn CLI:**
   ```bash
   npx shadcn@latest add <component-registry-url>
   ```

2. **Manual Addition:**
   - Copy component files to `components/` directory
   - Ensure proper TypeScript types
   - Add to component exports if needed
   - Update documentation in `content/docs/`

### Component Development Guidelines

- Use TypeScript for all components
- Follow the established naming conventions
- Include proper JSDoc comments
- Ensure accessibility with Radix UI primitives
- Test animations and interactions
- Document usage in MDX files

### Styling & Theming

- **Tailwind CSS 4**: Latest version with improved performance
- **CSS Variables**: Theme customization through CSS custom properties
- **Dark Mode**: Built-in dark/light theme support via next-themes
- **Responsive Design**: Mobile-first approach

## API Reference

### Search API
- **Endpoint**: `/api/search`
- **Method**: GET
- **Purpose**: Component and documentation search functionality
- **Status**: Implementation pending

## Configuration Files

### Next.js Configuration (`next.config.ts`)
- App Router enabled
- MDX support through Fumadocs
- Optimized for component library

### Tailwind Configuration
- CSS variables for theming
- Custom animations and utilities
- PostCSS processing

### ESLint Configuration
- Next.js recommended rules
- TypeScript support
- Custom component linting

### Shadcn/UI Configuration (`components.json`)
- New York style variant
- RSC (React Server Components) support
- Lucide icons
- Tailwind CSS integration

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure build settings:
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
3. Deploy automatically on push

### Other Platforms

The project is compatible with any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## Contributing

We welcome contributions to TS-UI! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly:**
   - Run the development server
   - Test components in different themes
   - Verify animations and interactions
5. **Update documentation** if adding new components
6. **Commit your changes:**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
7. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request**

### Contribution Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Include JSDoc comments for components
- Test components across different screen sizes
- Ensure accessibility compliance
- Update relevant documentation

## License

[Specify your license here - e.g., MIT, Apache 2.0, etc.]

## Acknowledgments

- **Vercel** for Next.js and hosting
- **Shadcn** for the UI component system
- **Radix UI** for accessible primitives
- **Framer** for Motion library
- **Tailwind Labs** for CSS framework
- **Fumadocs** for documentation framework

## Support

For questions, issues, or contributions:
- Open an issue on GitHub
- Check the documentation at `/docs`
- Review component examples in the showcase

---

Built with ❤️ for the modern web
