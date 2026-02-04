# SafeAlert 🚨

> Fast, reliable emergency response at your fingertips

SafeAlert is a modern, production-ready web application designed to provide quick and easy access to emergency services and support when you need it most. Built with Next.js, TypeScript, and TailwindCSS, SafeAlert combines an intuitive interface with powerful emergency management features.

## Features ✨

- **📞 Quick Emergency Calling** - One-tap access to emergency services (911)
- **🚑 Multiple Service Types** - Medical, Fire & Rescue, Police, and Location Sharing
- **📍 Location Sharing** - Instantly share your location with emergency contacts
- **👥 Emergency Contacts Management** - Store and manage up to 10 emergency contacts
- **⚡ Real-time Alerts** - Receive instant emergency notifications
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern Design** - Clean, accessible UI with professional branding
- **♿ Accessible** - WCAG compliant with keyboard navigation support
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times

## Tech Stack 🛠️

- **Frontend & Backend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3 + Custom Components
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Notifications**: Sonner + React Toaster
- **Package Manager**: pnpm
- **Deployment**: Vercel (native support)

## Project Structure 📁

```
├── app/                         # Next.js App Router
│   ├── page.tsx                # Homepage - Emergency services & features
│   ├── layout.tsx              # Root layout with providers
│   ├── not-found.tsx           # 404 page handler
│   ├── api/                    # Next.js API routes
│   │   └── demo/
│   │       └── route.ts        # Example API endpoint
│   └── globals.css             # Global styles & CSS variables
│
├── client/                      # Shared React components
│   ├── components/
│   │   └── ui/                 # Pre-built UI components (Radix UI)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   └── global.css              # (Legacy - use app/globals.css)
│
├── shared/                      # Shared types & interfaces
│   └── api.ts                  # API type definitions
│
├── public/                      # Static assets
│   └── robots.txt
│
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment config
├── .env.local                 # Environment variables
└── package.json               # Project dependencies
```

## Getting Started 🚀

### Prerequisites

- **Node.js** 18+
- **pnpm** 10.14.0+ (or npm/yarn)

### Installation

1. **Clone the repository** (if using from git)

   ```bash
   git clone <repository-url>
   cd safealert
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:8080`

4. **Open in your browser**
   Navigate to http://localhost:8080 to see the SafeAlert homepage

## Available Scripts 📜

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Quality
pnpm lint             # Run ESLint
pnpm type-check       # Check TypeScript types
pnpm format           # Format code with Prettier
pnpm test             # Run tests with Vitest
```

## Design System 🎨

SafeAlert uses a carefully crafted color scheme optimized for emergency applications:

### Colors

- **Primary Blue** (`#0084FF`) - Primary actions, trust, and calmness
- **Emergency Red** (`#EE2533`) - Urgent alerts and critical actions
- **Neutral Grays** - Professional hierarchy and readability

### Components

The app includes pre-built UI components in `client/components/ui/` (Radix UI based):

- Buttons, Cards, Inputs
- Dialogs, Modals, Dropdowns
- Tooltips, Popovers, Tabs
- And more...

### Adding Custom Styles

1. **Global styles** → `client/global.css`
2. **Tailwind theme** → `tailwind.config.ts`
3. **Component styles** → Use Tailwind classes or CSS modules

## Pages 📄

### Home Page (`/`)

The main landing page featuring:

- Emergency services quick access
- Key features & benefits
- Emergency contacts management preview
- Call-to-action for app downloads
- Professional footer with links

### 404 Page (`*`)

User-friendly error page for non-existent routes

## Theming 🌓

The app supports light mode by default. To add dark mode:

1. Update CSS variables in `client/global.css` (`.dark` section)
2. Use Tailwind's `dark:` prefix for dark-mode styles
3. Implement theme toggle with `next-themes` (already installed)

## API Integration 🔌

Example of calling backend endpoints:

```typescript
// Example API call
const response = await fetch("/api/demo");
const data = await response.json();
```

To add new endpoints:

1. Create handler in `server/routes/my-endpoint.ts`
2. Register in `server/index.ts`
3. Call from client with `fetch('/api/my-endpoint')`

See `AGENTS.md` for detailed backend setup instructions.

## Performance 🚄

- **Next.js** - Optimized build and lightning-fast server
- **App Router** - File-based routing with automatic code splitting
- **TailwindCSS** - Minimal CSS with PurgeCSS
- **Image Optimization** - Next.js native image optimization
- **Streaming** - Progressive rendering for faster perceived performance

## Responsive Design 📱

The app is fully responsive:

- **Mobile** (< 640px) - Touch-friendly, single column
- **Tablet** (640px - 1024px) - Optimized spacing, 2-3 columns
- **Desktop** (> 1024px) - Full featured layout, 4+ columns

Test responsiveness:

```bash
# Firefox/Chrome DevTools
F12 → Toggle device toolbar (Ctrl+Shift+M)
```

## Deployment 🚀

### Build for Production

```bash
pnpm build
pnpm start
```

### Deploy to Vercel (Recommended) ⚡

SafeAlert is built with Next.js and has **zero-configuration deployment** on Vercel:

#### Option 1: Quick Deploy with GitHub

1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repo
4. Click "Deploy"
5. ✅ Done! Your app is live

#### Option 2: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

#### Option 3: Manual Import

1. Push code to GitHub
2. Connect repo in Vercel dashboard
3. Vercel auto-detects Next.js
4. Deploy automatically

### Add Custom Domain

```
Vercel Dashboard → Project Settings → Domains → Add
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["pnpm", "start"]
```

## Browser Support 🌐

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari 14+
- Edge (latest)

## Security 🔒

- XSS Protection via React's built-in escaping
- CSRF tokens for form submissions (add if needed)
- Environment variables for secrets (use `.env.local`)
- HTTPS recommended for production
- Never commit `.env.local` or secrets

## Contributing 🤝

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Run tests (`pnpm test`) and type check (`pnpm typecheck`)
4. Format code (`pnpm format.fix`)
5. Push to branch and create a Pull Request

### Development Guidelines

- Keep components small and focused (< 300 lines)
- Use TypeScript for type safety
- Follow existing code style
- Write meaningful commit messages
- Test responsive behavior on multiple devices

## Troubleshooting 🔧

### Port Already in Use

```bash
# Change port in vite.config.ts
export default {
  server: {
    port: 3000 // Change this
  }
}
```

### Dependencies Issue

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors

```bash
# Check TypeScript
pnpm typecheck

# Check for linting issues
pnpm format.fix
```

## License 📄

MIT License - see LICENSE file for details

## Support 💬

For issues, questions, or feature requests:

1. Check existing documentation
2. Review similar implementations in the codebase
3. Create an issue with detailed reproduction steps

## Kenya-Specific Features 🇰🇪

SafeAlert is tailored for Kenya with:

### Emergency Numbers

- **Police Emergency**: +254 20 2222222 or 999
- **Ambulance/Medical**: +254 20 2245000
- **Fire Brigade**: +254 20 2222222

### Kenyan Contacts

- All contact numbers use +254 country code (Kenya)
- Emergency contacts pre-configured with Kenyan phone formats
- Location sharing optimized for Kenya's geography

## Important Notice 🚨

**SafeAlert is a demonstration application.** In real emergencies in Kenya, always call directly:

- **Police/Fire**: 999 or +254 20 2222222
- **Medical Emergency**: +254 20 2245000
- **Tourist Police**: +254 20 2987000

This app is designed to complement, not replace, direct emergency communication. In life-threatening situations, always call 999 immediately.

---

Built with ❤️ for safety and reliability in Kenya. Stay safe!
