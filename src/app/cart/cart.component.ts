// cart/cart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { DiscountPipe } from '../discount.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DiscountPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  get cartCount() {
    return this.cartService.getCartCount();
  }

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get discountedTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + (item.price * (1 - item.discountPercentage / 100)) * item.quantity,
      0
    );
  }

  increaseQuantity(item: any) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: any) {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartItems.length = 0; // Reset array
    }
  }

  checkout() {
    alert('Checkout functionality coming soon!'); // Placeholder
  }
}