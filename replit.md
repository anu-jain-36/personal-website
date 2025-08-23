# Portfolio Website Application

## Overview

This is a modern full-stack portfolio website built with React on the frontend and Express.js on the backend. The application showcases a developer's portfolio with sections for about, experience, skills, and contact information. It features a clean, responsive design using shadcn/ui components and Tailwind CSS, with a contact form that stores submissions in a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server for consistent validation
- **Storage**: Currently using in-memory storage with MemStorage class, designed to be easily replaceable with database storage
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)
- **Development**: Hot reload with Vite middleware integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured with Neon serverless driver
- **ORM**: Drizzle ORM with migrations support
- **Schema**: Shared TypeScript schema definitions between client and server
- **Current Implementation**: In-memory storage for rapid development, with PostgreSQL schema ready for production deployment

### Authentication and Authorization
- **Current State**: No authentication implemented
- **Contact Form**: Public submission endpoint with validation
- **Admin Features**: Basic endpoint for retrieving contact submissions (unprotected)

### Component Architecture
- **Design System**: Comprehensive UI component library with consistent theming
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts
- **Accessibility**: Built on Radix UI primitives for accessible components
- **Performance**: Lazy loading and optimized animations for smooth user experience

### Development Workflow
- **TypeScript**: Strict type checking across the entire application
- **Path Aliases**: Organized imports with @ aliases for client code and @shared for common utilities
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Build Process**: Separate client and server builds with optimized output

### External Dependencies

- **Neon Database**: Serverless PostgreSQL database service via @neondatabase/serverless
- **UI Framework**: Radix UI component primitives for accessible and customizable components
- **Styling**: Tailwind CSS for utility-first styling approach
- **Validation**: Zod for runtime type validation and schema parsing
- **Development Tools**: Various development utilities including TSX for TypeScript execution and ESBuild for server bundling
- **Fonts**: Google Fonts integration for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography throughout the application

The application is structured as a monorepo with shared utilities and schemas, making it easy to maintain consistency between frontend and backend while allowing for independent deployment strategies.