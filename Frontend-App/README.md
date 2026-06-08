# TWK - Fashion Store

A modern, responsive e-commerce application built with React, showcasing clothing, footwear, and accessories.

## Project Structure

```
Frontend-App/
├── public/              # Static assets
│   ├── images/          # Image assets organized by category
│   │   ├── clothing/    # Shirts and pants
│   │   ├── footwear/    # Shoes and sneakers
│   │   ├── accessories/ # Hats and accessories
│   │   └── banners/     # Banner images
│   └── index.html       # HTML entry point
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── constants/       # Constants and configuration
│   ├── assets/          # CSS styles
│   ├── app.js           # Main app component
│   └── index.js         # React DOM entry point
└── package.json         # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
cd Frontend-App
npm install
```

### Development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

## Features

- 📱 Fully responsive design
- 🛍️ Product catalog with filtering
- 🔍 Product search functionality
- 🎨 Modern UI with smooth animations
- ⚡ Optimized performance

## Technologies

- React 18.2.0
- React Router DOM 6.22.0
- React Scripts 5.0.1
- CSS3 with responsive design

## Deployment

### Vercel

The project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

Or use Vercel CLI:

```bash
vercel --prod
```

## Environment Variables

Create a `.env.local` file in the `Frontend-App` directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC
