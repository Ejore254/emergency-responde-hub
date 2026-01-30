# SafeAlert 🚨

> Fast, reliable emergency response at your fingertips

SafeAlert is a modern, production-ready web application designed to provide quick and easy access to emergency services and support when you need it most. Built with React, TypeScript, and TailwindCSS, SafeAlert combines an intuitive interface with powerful emergency management features.

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

- **Frontend**: React 18 + React Router 6 (SPA mode)
- **Language**: TypeScript
- **Styling**: TailwindCSS 3 + Custom Components
- **Build Tool**: Vite
- **Backend**: Express.js (integrated)
- **Icons**: Lucide React
- **Data Fetching**: TanStack React Query
- **Testing**: Vitest
- **Package Manager**: pnpm

## Project Structure 📁

```
├── client/                      # React SPA frontend
│   ├── pages/
│   │   ├── Index.tsx           # Homepage - Emergency services & features
│   │   └── NotFound.tsx        # 404 page
│   ├── components/
│   │   └── ui/                 # Pre-built UI components (Radix UI)
│   ├── App.tsx                 # App entry point & SPA routing
│   ├── global.css              # TailwindCSS theming & global styles
│   └── vite-env.d.ts          # Vite environment types
│
├── server/                      # Express API backend
│   ├── index.ts               # Server setup & route configuration
│   └── routes/                # API endpoint handlers
│
├── shared/                      # Shared types between client & server
│   └── api.ts                 # Shared API interfaces
│
├── tailwind.config.ts         # TailwindCSS configuration
├── vite.config.ts             # Vite client config
├── vite.config.server.ts      # Vite server config
├── tsconfig.json              # TypeScript configuration
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
pnpm dev              # Start dev server with hot reload (client + server)

# Production
pnpm build            # Build both client and server for production
pnpm build:client     # Build frontend only
pnpm build:server     # Build backend only
pnpm start            # Start production server

# Quality
pnpm test             # Run tests with Vitest
pnpm typecheck        # Check TypeScript types
pnpm format.fix       # Format code with Prettier
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

- **Vite** - Instant server start and lightning-fast HMR
- **React Router SPA** - Client-side routing with no full page reloads
- **TailwindCSS** - Minimal CSS with PurgeCSS
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Use optimized formats

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

### Hosting Options

#### Netlify

1. Connect your repo in Netlify dashboard
2. Set build command: `pnpm build`
3. Set publish directory: `dist/spa`
4. Deploy!

#### Vercel

1. Import project in Vercel dashboard
2. Auto-detects build settings
3. Deploy with one click!

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN pnpm install && pnpm build
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

## Important Notice 🚨

**SafeAlert is a demonstration application.** In real emergencies, always call your local emergency number directly:

- **USA**: 911
- **Europe**: 112
- **UK**: 999
- **Other**: Check your local emergency number

This app is designed to complement, not replace, direct emergency communication.

---

Built with ❤️ for safety and reliability. Stay safe!
