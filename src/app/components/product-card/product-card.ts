import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) productId!: number;

  @Input() variant: 'catalog' | 'cart' = 'catalog';

  @Input() image = '';
  @Input() name = '';
  @Input() price = 0;
  @Input() originalPrice = 0;

  @Input() availableStock = 0;

  @Input() quantity = 0;

  @Output() add = new EventEmitter<number>();
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();
  @Output() removeAll = new EventEmitter<number>();

  onAdd(): void {
    this.add.emit(this.productId);
  }

  onIncrement(): void {
    this.increment.emit(this.productId);
  }

  onDecrement(): void {
    this.decrement.emit(this.productId);
  }

  onRemoveAll(): void {
    this.removeAll.emit(this.productId);
  }
}
