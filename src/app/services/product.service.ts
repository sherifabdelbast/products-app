// services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductsPaginated(page: number, limit: number): Observable<{ products: Product[]; total: number }> {
    const skip = (page - 1) * limit;
    return this.http.get<{ products: Product[]; total: number }>(`${this.apiUrl}?limit=${limit}&skip=${skip}`).pipe(
      map(response => {
        // Simulate out-of-stock for every 3rd product
        response.products = response.products.map((product, index) => ({
          ...product,
          stock: index % 3 === 0 ? 0 : product.stock // Every 3rd item out of stock
        }));
        return response;
      })
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      map(product => ({
        ...product,
        stock: Math.random() > 0.7 ? 0 : product.stock // Randomly set some to 0
      }))
    );
  }
}