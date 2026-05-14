import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CatalogViewItem } from '../../../../services/cart.service';
import { CustomCurrencyPipe } from '../../../../pipes/custom-currency.pipe';

@Component({
  selector: 'app-product-detail-section',
  standalone: true,
  imports: [CustomCurrencyPipe, NgClass, RouterLink, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './product-detail-section.html',
  styleUrl: './product-detail-section.css',
})
export class ProductDetailSection {
  product = input.required<CatalogViewItem>();

  add = output<number>();

  onAdd(): void {
    this.add.emit(this.product().id);
  }
}
