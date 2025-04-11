// product-card/product-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router, private cartService: CartService) {}

  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }

  getStars(rating: number): { full: number; half: number; empty: number } {
    const fullStars = Math.floor(rating); // Full stars
    const decimal = rating % 1; // Decimal part
    const halfStars = decimal >= 0.3 ? 1 : 0; // Half star if >= 0.3
    const emptyStars = 5 - fullStars - halfStars; // Remaining empty
    return { full: fullStars, half: halfStars, empty: emptyStars };
  }

  get stars() {
    return this.getStars(this.product.rating);
  }
}