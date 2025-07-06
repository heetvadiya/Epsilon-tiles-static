# Premium Wooden Flooring Product Section

A sophisticated, interactive product showcase system built with React, TypeScript, and Framer Motion for luxury flooring companies. This implementation provides a premium showroom experience with cutting-edge web technologies.

## Features

### 🏆 Premium Components

#### 1. ProductShowcase
A full-screen, immersive product experience modal featuring:
- **Hero Section**: 60/40 split layout with media stage and product info panel
- **Interactive Gallery**: Image navigation with hotspots and 360° video integration
- **Tabbed Details Hub**: Specifications, features, and installation guides
- **Room Visualization**: See products in different room contexts
- **Glass-morphism Design**: Modern blur effects and premium styling

#### 2. Enhanced ProductCard
Luxury product cards with advanced interactions:
- **Premium Animations**: Sophisticated hover effects and state transitions
- **Quick Actions**: Wishlist, share, and quick view functionality
- **Interactive Overlays**: Smooth image transitions and micro-interactions
- **Responsive Design**: Optimized for all device sizes
- **Performance**: Lazy loading and optimized animations

#### 3. MediaPlayer
Professional 360° video player with:
- **Custom Controls**: Play/pause, volume, progress, and fullscreen
- **360° Support**: Special handling for interactive video content
- **Loading States**: Skeleton screens and progress indicators
- **Error Handling**: Graceful fallbacks and retry functionality
- **Accessibility**: Full keyboard and screen reader support

#### 4. ProductSection
Comprehensive product collection display:
- **Advanced Filtering**: Category, search, and sorting capabilities
- **View Layouts**: Grid and masonry layout options
- **Loading States**: Smooth skeleton animations
- **Empty States**: User-friendly no-results messaging
- **Infinite Loading**: Progressive content loading

#### 5. BeforeAfterSlider
Interactive room transformation visualization:
- **Drag Interaction**: Smooth slider control for before/after comparison
- **Touch Support**: Full mobile gesture support
- **Progress Indicator**: Visual feedback for slider position
- **Preloading**: Optimized image loading for smooth experience

## Installation & Setup

### Prerequisites
- Node.js 16+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion

### Required Dependencies
```bash
npm install framer-motion lucide-react
```

### File Structure
```
src/
├── components/
│   ├── ProductShowcase.tsx      # Main showcase modal
│   ├── ProductCard.tsx          # Enhanced product cards
│   ├── ProductSection.tsx       # Collection display
│   ├── MediaPlayer.tsx          # 360° video player
│   ├── BeforeAfterSlider.tsx    # Room transformation
│   └── Product360Card.tsx       # 360° product cards
├── data/
│   ├── products.ts              # Product data structure
│   └── 360products.ts           # 360° product data
└── pages/
    ├── Home.tsx                 # Homepage integration
    └── Collection.tsx           # Collection page
```

## Usage Examples

### Basic Product Showcase
```tsx
import ProductSection from './components/ProductSection';

function App() {
  return (
    <ProductSection
      title="Featured Collections"
      subtitle="Our premium flooring options"
      showFilters={true}
      maxProducts={8}
      layout="grid"
      showViewToggle={true}
    />
  );
}
```

### 360° Video Player
```tsx
import MediaPlayer from './components/MediaPlayer';

function ProductDetail() {
  return (
    <MediaPlayer
      src="/videos/product-360.mp4"
      poster="/images/product-poster.jpg"
      title="Premium Oak Flooring"
      is360={true}
      autoPlay={true}
    />
  );
}
```

### Before/After Room Visualization
```tsx
import BeforeAfterSlider from './components/BeforeAfterSlider';

function RoomDemo() {
  return (
    <BeforeAfterSlider
      beforeImage="/images/room-before.jpg"
      afterImage="/images/room-after.jpg"
      title="Living Room Transformation"
      beforeLabel="Original Floor"
      afterLabel="With Premium SPC"
    />
  );
}
```

### Enhanced Product Cards with Showcase
```tsx
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import ProductShowcase from './components/ProductShowcase';

function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onShowcase={setSelectedProduct}
            showQuickActions={true}
            layout="grid"
          />
        ))}
      </div>
      
      {selectedProduct && (
        <ProductShowcase
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
```

## Data Structure

### Product Interface
```typescript
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  sizes: string[];
  thickness: {
    core: string;
    options: string[];
  };
  underpad: {
    type: string;
    thickness: string;
  };
  wearLayer: {
    thickness: string;
    options: string[];
  };
  features: string[];
  viewUrl: string;
  related: string[];
}
```

## Styling & Theming

### CSS Custom Properties
```css
:root {
  --primary: #CBDA5E;
  --primary-hover: #B8C954;
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --border: #E5E7EB;
}
```

### Tailwind Configuration
The components use these Tailwind classes extensively:
- `bg-primary` - Primary brand color
- `text-primary` - Primary text color
- `card` - Custom card component
- `btn` - Button variants
- `backdrop-blur-sm` - Glass morphism effects

## Performance Optimizations

### Image Optimization
- WebP format with JPEG fallbacks
- Lazy loading for off-screen images
- Progressive enhancement for better UX
- Responsive image sizing

### Animation Performance
- Hardware-accelerated CSS transforms
- RequestAnimationFrame for smooth 60fps
- Reduced motion support for accessibility
- Optimized re-renders with React.memo

### Code Splitting
```tsx
import { lazy, Suspense } from 'react';

const ProductShowcase = lazy(() => import('./ProductShowcase'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductShowcase />
    </Suspense>
  );
}
```

## Accessibility Features

### ARIA Support
- Comprehensive labeling for screen readers
- Role definitions for interactive elements
- Live regions for dynamic content updates

### Keyboard Navigation
- Full keyboard support for all interactions
- Focus management in modals
- Escape key handling for overlays

### Visual Accessibility
- High contrast mode support
- Reduced motion preferences
- WCAG 2.1 AA compliance

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, Intersection Observer

## API Integration

### External Services
```typescript
// Example API integration
interface ProductAPI {
  getProducts: (filters?: FilterOptions) => Promise<Product[]>;
  getProduct360: (id: string) => Promise<Product360>;
  uploadImage: (file: File) => Promise<string>;
}
```

### Real-time Updates
```typescript
// WebSocket integration for live updates
const useProductUpdates = () => {
  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/products');
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      // Handle real-time product updates
    };
  }, []);
};
```

## Testing

### Component Testing
```tsx
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product information', () => {
  render(<ProductCard product={mockProduct} />);
  expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
});
```

### Performance Testing
- Lighthouse audit score 90+
- Core Web Vitals optimization
- Load testing with large product catalogs

## Deployment

### Build Optimization
```bash
# Production build with optimizations
npm run build

# Analyze bundle size
npm run build:analyze
```

### CDN Configuration
```javascript
// Optimize for static assets
const config = {
  images: {
    domains: ['images.pexels.com', 'cdn.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
};
```

## Future Enhancements

### Planned Features
- [ ] AR/VR integration for room visualization
- [ ] AI-powered product recommendations
- [ ] Social sharing with Open Graph
- [ ] Progressive Web App capabilities
- [ ] Advanced analytics integration

### Performance Roadmap
- [ ] Service Worker implementation
- [ ] Edge caching strategies
- [ ] Advanced image optimization
- [ ] Bundle splitting optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding standards
4. Add tests for new features
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please:
- Check the documentation
- Review example implementations
- Open an issue on GitHub
- Contact the development team

---

Built with ❤️ for premium flooring experiences
