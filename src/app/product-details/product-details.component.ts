// product-details/product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  currentImageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => (this.product = product),
        error: (err) => console.error('Error fetching product:', err)
      });
    }
  }

  nextImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  prevImage() {
    if (this.product && this.product.images) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.router.navigate(['/cart']);
    }
  }

  backToProducts() {
    this.router.navigate(['/']);
  }
}