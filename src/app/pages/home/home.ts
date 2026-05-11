import { Component, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [
    ProductCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly cartService = inject(CartService);

  protected readonly catalogView = this.cartService.catalogView;

  addOne(productId: number): void {
    this.cartService.addOne(productId);
  }
}
