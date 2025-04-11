// pipes/discount.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): string {
    const discountedPrice = price * (1 - discountPercentage / 100);
    return `$${discountedPrice.toFixed(2)}`;
  }
}