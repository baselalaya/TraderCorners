# Trader Corners - Premium Trading Platform

A cutting-edge trading platform delivering an immersive, mobile-first digital trading experience with responsive and interactive design technologies.

![Trader Corners Platform](./attached_assets/logo.png)

## 🚀 Features

- **Mobile-First Design**: Responsive and adaptive interface optimized for all devices
- **Real-Time Market Data**: Live pricing across forex, cryptocurrency, and commodities
- **Interactive Animations**: Smooth Framer Motion animations with performance optimization
- **Glass Morphism UI**: Modern design with backdrop blur effects
- **Navigation Dropdowns**: Animated submenus with hover effects
- **Market Ticker**: Scrolling marquee for live market updates on mobile
- **Performance Optimized**: Reduced resource usage for better device performance

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for responsive styling
- **Framer Motion** for advanced animations
- **Radix UI** for accessible component primitives
- **Lucide React** for icons
- **Wouter** for client-side routing

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Drizzle ORM** for database operations
- **Zod** for runtime validation

### Development Tools
- **Vite** for fast development and building
- **ESBuild** for bundling
- **PostCSS** with Autoprefixer
- **Drizzle Kit** for database management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** for version control

## 🔧 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/trader-corners.git
cd trader-corners
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the following environment variables:

```env
# Database Configuration
DATABASE_URL="your_database_connection_string"

# Server Configuration
PORT=5000
NODE_ENV=development

# Additional API Keys (if needed)
# MARKET_DATA_API_KEY="your_api_key"
# THIRD_PARTY_SERVICE_KEY="your_service_key"
```

### 4. Database Setup

Initialize and migrate the database:

```bash
# Generate database schema
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Seed with sample data
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5000
- **API**: http://localhost:5000/api

## 📦 Build and Deployment

### Production Build

```bash
# Build the application
npm run build

# Preview the production build locally
npm run preview
```

### Deployment Options

#### Option 1: Replit Deployment (Recommended)

1. Connect your GitHub repository to Replit
2. Import the project into Replit
3. Configure environment variables in Replit Secrets
4. Click "Deploy" to create a live deployment

#### Option 2: Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to configure your deployment
```

#### Option 3: Railway Deployment

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize and deploy
railway deploy
```

#### Option 4: Docker Deployment

```bash
# Build Docker image
docker build -t trader-corners .

# Run container
docker run -p 5000:5000 trader-corners
```

### Environment Variables for Production

Ensure these variables are set in your production environment:

```env
NODE_ENV=production
DATABASE_URL="your_production_database_url"
PORT=5000
```

## 🏗 Project Structure

```
trader-corners/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # Reusable UI components
│   │   │   └── *.tsx     # Feature components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── main.tsx      # Application entry point
│   └── index.html        # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database layer
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
├── attached_assets/      # Project assets
├── components.json       # Shadcn/UI configuration
├── drizzle.config.ts     # Database configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Red (#ef0f12) - Brand color
- **Secondary**: Complementary accent colors
- **Background**: Clean whites and subtle grays
- **Text**: High contrast for accessibility

### Typography
- **Primary Font**: Inter for clean, modern text
- **Display Font**: Custom font stack for headings

### Components
- Glass morphism cards with backdrop blur
- Animated navigation with hover effects
- Responsive grid layouts
- Mobile-optimized interactions

## 📱 Mobile Optimization

- **Responsive Breakpoints**: Mobile-first approach
- **Touch Interactions**: Optimized for touch devices
- **Performance**: Reduced animations on mobile
- **Marquee Display**: Horizontal scrolling market data

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Database
npm run db:generate     # Generate database schema
npm run db:migrate      # Run database migrations
npm run db:studio       # Open database studio

# Code Quality
npm run lint           # Run ESLint
npm run type-check     # TypeScript type checking
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=3000 npm run dev
```

#### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Ensure the database server is running
- Check firewall settings

#### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist .vite
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [Trader Corners Platform](https://your-deployment-url.replit.app)
- **Documentation**: [Project Wiki](https://github.com/your-username/trader-corners/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/trader-corners/issues)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: your-email@example.com
- Documentation: Check the project wiki

---

Built with ❤️ using modern web technologies for the ultimate trading experience.