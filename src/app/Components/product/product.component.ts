import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  selectedVariant: string = '';
  isAddingToCart: boolean = false;
  showQuickView: boolean = false;

  ngOnInit(): void {
    // Initialize with first variant if available
    if (this.product.variants.length > 0) {
      this.selectedVariant = this.product.variants[0];
    }
  }

  onVariantChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedVariant = target.value;

    // Add visual feedback
    const button = target.closest('.product-card')?.querySelector('.add-to-cart-btn');
    if (button) {
      button.classList.add('variant-changed');
      setTimeout(() => {
        button.classList.remove('variant-changed');
      }, 300);
    }
  }

  addToCart(): void {
    if (!this.product.inStock) {
      return;
    }

    this.isAddingToCart = true;

    // Simulate API call
    setTimeout(() => {
      console.log(`Added to cart: ${this.product.name} - ${this.selectedVariant || 'Default variant'}`);

      // Show success feedback
      const button = document.querySelector('.add-to-cart-btn') as HTMLElement;
      if (button) {
        button.style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
        button.textContent = 'Added!';

        setTimeout(() => {
          button.style.background = '';
          button.textContent = 'Add to Cart';
        }, 2000);
      }

      this.isAddingToCart = false;
    }, 500);
  }

  // Quick view functionality
  quickView(): void {
    this.showQuickView = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeQuickView(): void {
    this.showQuickView = false;
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Close modal when clicking outside
  onModalClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeQuickView();
    }
  }
}
