import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogViewItem } from '../../services/cart.service';
import { CustomCurrencyPipe } from '../../pipes/custom-currency.pipe';

@Component({
  selector: 'app-related-product-card',
  standalone: true,
  imports: [CustomCurrencyPipe, RouterLink],
  templateUrl: './related-product-card.html',
  styleUrl: './related-product-card.css',
})
export class RelatedProductCard {
  product = input.required<CatalogViewItem>();
}
