import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { ProductDetailSection } from './components/product-detail-section/product-detail-section';
import { RelatedProductCard } from '../../components/related-product-card/related-product-card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, MatIconModule, ProductDetailSection, RelatedProductCard, MatButton],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private readonly cartService = inject(CartService);
  private readonly route = inject(ActivatedRoute);

  protected readonly catalogView = this.cartService.catalogView;

  private readonly productId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: Number.NaN },
  );

  protected readonly product = computed(() =>
    this.cartService.catalogView().find((item) => item.id === this.productId()) ?? null,
  );

  addOne(productId: number): void {
    this.cartService.addOne(productId);
  }
}
