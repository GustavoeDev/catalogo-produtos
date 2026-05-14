import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CatalogViewItem } from '../../services/cart.service';

@Component({
  selector: 'app-related-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './related-product-card.html',
  styleUrl: './related-product-card.css',
})
export class RelatedProductCard {
  product = input.required<CatalogViewItem>();
}
