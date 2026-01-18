# Alkebulant Labs

Building Tomorrow's Software Today

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## Description

Alkebulant Labs is the frontier R&D division of Alkebulant, prototyping tomorrow's breakthroughs in AI‑blockchain hybrids, decentralized health/agri/biotech infrastructure, and next‑gen robotics protocols. We build high‑risk experiments that power the parent company's production solutions. This is our official website showcasing our work, team, and open-source contributions.

## Features

- **Modern React Application**: Built with React 18 and TypeScript for type safety
- **Fast Development**: Powered by Vite for lightning-fast hot module replacement
- **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Server-side rendering ready with proper meta tags
- **Accessibility**: WCAG compliant components and keyboard navigation

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion & AOS (Animate On Scroll)
- **Icons**: Lucide React
- **Routing**: React Router
- **Forms**: React Hook Form with Zod validation
- **Testing**: Vitest
- **Linting**: ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Page-specific components
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── test/               # Test files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <YOUR_GIT_URL>
   cd AlkebulantLabs
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm build:dev` - Build for development
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint for code quality
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode

## Development

### Code Style

This project uses ESLint for code linting. Make sure to run `pnpm lint` before committing.

### Testing

Tests are written with Vitest. Run `pnpm test` to execute the test suite.

### Building for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Run the linter: `pnpm lint`
5. Run tests: `pnpm test`
6. Commit your changes: `git commit -m 'Add some feature'`
7. Push to the branch: `git push origin feature/your-feature`
8. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [alkebulant.com](https://alkebulant.com)
- Email: labs@alkebulant.com
- LinkedIn: [Alkebulant Labs](https://linkedin.com/company/alkebulant-labs)

---

Built with ❤️ by the Alkebulant Labs team
