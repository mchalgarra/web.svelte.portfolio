# Portfolio Website

A modern, responsive portfolio website built with SvelteKit, showcasing my work, skills, and experience.

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with Svelte 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SCSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Testing**: Playwright (E2E) + Vitest (Unit)
- **Deployment**: Docker + Google Cloud Run

## 📋 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Animations**: Smooth scroll effects and interactive Memphis-style design elements
- **Sections**:
  - Home/Hero section
  - Company logos showcase
  - Expertise overview
  - Work portfolio
  - Main skills
  - Professional experiences
  - Contact information
  - Resume download

## 🛠️ Development

### Prerequisites

- Node.js 22+
- pnpm (enabled via corepack)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development Server

```bash
# Start the development server
pnpm dev
```

The site will be available at `http://localhost:5173`

### Building

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Testing

```bash
# Run all tests
pnpm test

# Run integration tests only
pnpm test:integration

# Run unit tests only
pnpm test:unit
```

### Code Quality

```bash
# Type checking
pnpm check

# Linting
pnpm lint

# Format code
pnpm format
```

## 🐳 Docker

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## ☁️ Deployment

The project is configured for deployment to Google Cloud Run. Use the provided deployment script:

```bash
# Deploy to Google Cloud Run
./deploy.sh
```

The deployment script:

1. Builds a Docker image
2. Pushes it to Google Artifact Registry
3. Deploys to Cloud Run

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   ├── constants/      # Application constants
│   ├── functions/      # Utility functions
│   ├── interfaces/     # TypeScript interfaces
│   └── styles/         # Global styles and variables
└── routes/
    └── (home)/         # Main page route
        ├── +page.svelte
        └── components/ # Page-specific components
```

## 📝 License

This project is private and proprietary.
