import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  variants: string[];
  inStock: boolean;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Product-Card';

  products: Product[] = [
    {
      id: '1',
      name: "Travel MacBook Pro 13-inch",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop",
      variants: ["8GB RAM", "16GB RAM", "512GB SSD", "1TB SSD"],
      inStock: true,
      description: "Portable MacBook Pro perfect for travel and work on the go"
    },
    {
      id: '2',
      name: "Gaming Mouse",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop",
      variants: ["Black", "White", "RGB", "Wireless"],
      inStock: true,
      description: "High-precision gaming mouse with customizable DPI"
    },
    {
      id: '3',
      name: "Mechanical Keyboard",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=400&fit=crop",
      variants: ["Blue Switches", "Red Switches", "Brown Switches", "RGB"],
      inStock: true,
      description: "Premium mechanical keyboard with backlit keys"
    },
    {
      id: '4',
      name: "Gaming Monitor",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=400&fit=crop",
      variants: ["27-inch", "32-inch", "Ultra-wide", "4K"],
      inStock: false,
      description: "High-refresh rate gaming monitor with HDR support"
    },
    {
      id: '5',
      name: "Gaming Headset",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
      variants: ["7.1 Surround", "Stereo", "Wireless", "Noise Cancelling"],
      inStock: true,
      description: "Immersive gaming headset with noise cancellation"
    },
    {
      id: '6',
      name: "Gaming Chair",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      variants: ["Black", "Red", "Blue", "Premium"],
      inStock: true,
      description: "Ergonomic gaming chair with lumbar support"
    },
    {
      id: '7',
      name: "Adventure Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop",
      variants: ["Large", "Medium", "Small", "Waterproof"],
      inStock: true,
      description: "Durable adventure backpack perfect for travel and outdoor activities"
    },
    {
      id: '8',
      name: "Gaming Controller",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&h=400&fit=crop",
      variants: ["Xbox Style", "PlayStation Style", "PC", "Wireless"],
      inStock: true,
      description: "Wireless gaming controller with vibration feedback"
    }
  ];
}
