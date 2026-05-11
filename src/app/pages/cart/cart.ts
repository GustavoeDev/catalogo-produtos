import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductCard } from '../../components/product-card/product-card';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-success-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div style="text-align: center; padding: 24px;">
      <mat-icon color="primary" style="font-size: 48px; width: 48px; height: 48px; margin-bottom: 16px;">check_circle</mat-icon>
      <h2 mat-dialog-title style="margin: 0 0 16px;">Compra realizada com sucesso!</h2>
      <mat-dialog-content>
        <p style="font-size: 16px; margin-bottom: 8px;">Obrigado por comprar conosco.</p>
        <p style="font-size: 18px; font-weight: 500;">Valor total: R$ {{ data.totalPrice.toFixed(2) }}</p>
      </mat-dialog-content>
      <mat-dialog-actions align="center" style="margin-top: 16px;">
        <button mat-flat-button color="primary" mat-dialog-close>Concluir</button>
      </mat-dialog-actions>
    </div>
  `,
})
export class CheckoutSuccessDialog {
  readonly data = inject<{ totalPrice: number }>(MAT_DIALOG_DATA);
}

@Component({
  selector: 'app-cart',
  imports: [ProductCard, CommonModule, MatButtonModule, MatIconModule, MatDividerModule, MatCardModule, MatDialogModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private readonly cartService = inject(CartService);
  private readonly dialog = inject(MatDialog);

  protected readonly cartView = this.cartService.cartView;
  protected readonly totalPrice = this.cartService.totalPrice;
  protected readonly totalUnits = this.cartService.totalUnitsInCart;

  addOne(productId: number): void {
    this.cartService.addOne(productId);
  }

  removeOne(productId: number): void {
    this.cartService.removeOne(productId);
  }

  removeAll(productId: number): void {
    this.cartService.removeAll(productId);
  }

  checkout(): void {
    if (this.cartView().length === 0) return;

    const dialogRef = this.dialog.open(CheckoutSuccessDialog, {
      data: { totalPrice: this.totalPrice() },
      width: '400px',
      panelClass: 'checkout-dialog'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.cartService.clear();
    });
  }
}
