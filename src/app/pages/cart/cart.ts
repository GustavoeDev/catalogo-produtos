import { Component, inject } from '@angular/core';

import { ProductCard } from '../../components/product-card/product-card';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [ProductCard],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private readonly cartService = inject(CartService);

  protected readonly cartView = this.cartService.cartView;

  addOne(productId: number): void {
    this.cartService.addOne(productId);
  }

  removeOne(productId: number): void {
    this.cartService.removeOne(productId);
  }

  removeAll(productId: number): void {
    this.cartService.removeAll(productId);
  }
}
