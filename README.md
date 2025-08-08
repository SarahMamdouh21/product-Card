# Product Card Demo

A modern, responsive product card component built with Angular 17 using high-quality online images. This project demonstrates a clean and professional e-commerce product listing interface with advanced UI/UX features.

## 🚀 Features

### Product Card Components
- **Product Image**: High-quality product images with hover effects
- **Product Name**: Clear, readable product titles
- **Product Price**: Prominent price display with currency symbol
- **Variant Selection**: Dropdown for product variants (color, size, etc.)
- **Add to Cart Button**: Interactive button with different states
- **Stock Status**: Dynamic "Out of Stock" state for unavailable products
- **Quick View**: Hover overlay with quick view functionality

### Design Features
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Modern UI**: Clean, card-based layout with subtle shadows and animations
- **Hover Effects**: Smooth transitions and interactive elements
- **Accessibility**: Proper focus states and semantic HTML
- **Performance**: Lazy loading images and optimized animations

### Technical Implementation
- **Angular 17**: Latest Angular framework with standalone components
- **TypeScript**: Strong typing for better development experience
- **SCSS**: Advanced styling with nested selectors and variables
- **CSS Grid**: Responsive grid layout for product cards
- **Flexbox**: Flexible layouts for component internals
- **Online Images**: Using high-quality images from Unsplash

## 📱 Responsive Design

The product cards adapt seamlessly across different screen sizes:

- **Desktop (>768px)**: 3-4 cards per row with full feature set
- **Tablet (480px-768px)**: 2-3 cards per row with optimized spacing
- **Mobile (<480px)**: Single column layout with touch-friendly elements

## 🎨 UI/UX Best Practices

### Visual Design
- **Card-based Layout**: Clean separation of products with subtle shadows
- **Consistent Spacing**: 8px grid system for consistent spacing
- **Typography Hierarchy**: Clear font weights and sizes for readability
- **Color Scheme**: Professional gradient backgrounds with accessible contrast

### Interactive Elements
- **Hover States**: Smooth transitions for all interactive elements
- **Button States**: Clear visual feedback for enabled/disabled states
- **Focus Management**: Proper focus indicators for keyboard navigation
- **Loading States**: Visual feedback for async operations

### Accessibility
- **Semantic HTML**: Proper use of headings, labels, and buttons
- **ARIA Labels**: Screen reader friendly interface
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

#### 1. Install Dependencies
```bash
# Navigate to project directory
cd Product-Card

# Install dependencies
npm install
```

#### 2. Start the Application
```bash
# Start the frontend application
npm start
```



The application will be available at:
- **Frontend**: http://localhost:4200

## 📁 Project Structure

```
Product-Card/
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   └── product/          # Product card component
│   │   ├── app.component.ts      # Main app component
│   │   └── app.config.ts         # App configuration
│   └── styles.scss               # Global styles
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎯 Component Architecture

### App Component
- **Data Management**: Contains product data with online images
- **Layout**: Responsive grid container
- **Styling**: Global layout and header styles

### Product Component
- **Input Properties**: Receives product data from parent
- **State Management**: Handles variant selection and cart actions
- **Template**: Clean, semantic HTML structure
- **Styling**: Comprehensive SCSS with responsive design

## 🖼️ Products Showcased

The project displays 8 high-quality products with professional images:

1. **Travel MacBook Pro 13-inch** - Portable laptop perfect for travel and work
2. **Gaming Mouse** - High-precision gaming mouse with customizable DPI
3. **Mechanical Keyboard** - Premium mechanical keyboard with backlit keys
4. **Gaming Monitor** - High-refresh rate gaming monitor with HDR support
5. **Gaming Headset** - Immersive gaming headset with noise cancellation
6. **Gaming Chair** - Ergonomic gaming chair with lumbar support
7. **Adventure Backpack** - Durable adventure backpack perfect for travel and outdoor activities
8. **Gaming Controller** - Wireless gaming controller with vibration feedback

## 🧪 Testing

The component includes comprehensive test scenarios:
- **Product Cards**: 8 different products with various features
- **Stock States**: Both in-stock and out-of-stock products
- **Variants**: Different product options and configurations
- **Responsive Design**: Works on all screen sizes

## 📈 Performance Considerations

- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Optimized Animations**: Hardware-accelerated CSS transitions
- **Efficient Rendering**: Angular change detection optimization
- **Minimal Bundle Size**: Standalone components reduce bundle size
- **Online Images**: High-quality images from Unsplash with optimized sizes

## 🌟 Future Enhancements

- **Shopping Cart Integration**: Connect to cart service
- **Product Filtering**: Add category and price filters
- **Wishlist Functionality**: Add to wishlist feature
- **Product Reviews**: Display customer reviews
- **Image Gallery**: Multiple product images with carousel
- **Quick Add**: One-click add to cart functionality
- **Image Optimization**: WebP format and responsive images

## 🔍 Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check internet connection for online images
   - Verify image URLs in app.component.ts
   - Ensure Angular dev server is running

2. **Product Cards Not Displaying**
   - Check browser console for errors
   - Verify Angular component imports
   - Test with browser dev tools

### Development Tips

- Use browser dev tools to inspect network requests
- Check Angular console for component errors
- Test responsive design with browser dev tools
- Verify image loading in Network tab



This project is open source and available under the MIT License.

---



*Built with ❤️ using Angular 17*
