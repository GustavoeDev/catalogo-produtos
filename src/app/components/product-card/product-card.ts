import { Component, input, output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomCurrencyPipe } from '../../pipes/custom-currency.pipe';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CustomCurrencyPipe, NgClass, NgStyle, DiscountPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  productId = input.required<number>();
  variant = input<'catalog' | 'cart'>('catalog');
  image = input('');
  name = input('');
  description = input('');
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
