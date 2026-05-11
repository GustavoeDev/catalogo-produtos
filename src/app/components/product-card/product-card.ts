import { Component, input, output } from '@angular/core';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe, NgClass, NgStyle, DiscountPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  productId = input.required<number>();
  variant = input<'catalog' | 'cart'>('catalog');
  image = input('');
  name = input('');
  price = input(0);
  originalPrice = input<number>(0);
  availableStock = input(0);
  quantity = input(0);

  add = output<number>();
  increment = output<number>();
  decrement = output<number>();
  removeAll = output<number>();

  onAdd(): void {
    this.add.emit(this.productId());
  }

  onIncrement(): void {
    this.increment.emit(this.productId());
  }

  onDecrement(): void {
    this.decrement.emit(this.productId());
  }

  onRemoveAll(): void {
    this.removeAll.emit(this.productId());
  }
}
