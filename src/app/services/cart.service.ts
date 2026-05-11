import { computed, Injectable, signal } from '@angular/core';

import { CATALOG } from '../data/catalog';
import { CartItem, CatalogProduct, ProductId } from '../models/product';

export interface CatalogViewItem extends CatalogProduct {
  quantityInCart: number;
  availableStock: number;
}

export interface CartViewItem extends CatalogProduct {
  quantity: number;
  availableStock: number;
}

const CATALOG_BY_ID = new Map<ProductId, CatalogProduct>(CATALOG.map((p) => [p.id, p]));

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly cart = signal<CartItem[]>([]);

  readonly totalUnitsInCart = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly catalogView = computed<CatalogViewItem[]>(() => {
    const items = this.cart();

    return CATALOG.map((product) => {
      const quantityInCart = this.quantityInCart(items, product.id);
      const availableStock = Math.max(0, product.stock - quantityInCart);

      return {
        ...product,
        quantityInCart,
        availableStock,
      };
    });
  });

  readonly cartView = computed<CartViewItem[]>(() => {
    const items = this.cart();

    return items
      .map((item) => {
        const product = CATALOG_BY_ID.get(item.productId);
        if (!product) return null;

        const availableStock = Math.max(0, product.stock - item.quantity);

        return {
          ...product,
          quantity: item.quantity,
          availableStock,
        } satisfies CartViewItem;
      })
      .filter((item): item is CartViewItem => item !== null);
  });

  addOne(productId: ProductId): void {
    const product = CATALOG_BY_ID.get(productId);
    if (!product) return;

    const currentItems = this.cart();
    const currentQuantity = this.quantityInCart(currentItems, productId);

    if (currentQuantity >= product.stock) return;

    this.cart.update((items) => {
      const existingIndex = items.findIndex((item) => item.productId === productId);
      if (existingIndex === -1) {
        return [...items, { productId, quantity: 1 }];
      }

      return items.map((item, index) =>
        index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  removeOne(productId: ProductId): void {
    this.cart.update((items) => {
      const existing = items.find((item) => item.productId === productId);
      if (!existing) return items;

      if (existing.quantity <= 1) {
        return items.filter((item) => item.productId !== productId);
      }

      return items.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  }

  removeAll(productId: ProductId): void {
    this.cart.update((items) => items.filter((item) => item.productId !== productId));
  }

  private quantityInCart(items: CartItem[], productId: ProductId): number {
    return items.find((item) => item.productId === productId)?.quantity ?? 0;
  }
}
