// services/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: (Product & { quantity: number })[] = [];

  getCartItems(): (Product & { quantity: number })[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  addToCart(product: Product) {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      if (existing.quantity < product.stock) existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  increaseQuantity(item: Product & { quantity: number }) {
    if (item.quantity < item.stock) item.quantity++;
  }

  decreaseQuantity(item: Product & { quantity: number }) {
    if (item.quantity > 1) item.quantity--;
    else this.removeItem(item);
  }

  removeItem(item: Product & { quantity: number }) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }
}