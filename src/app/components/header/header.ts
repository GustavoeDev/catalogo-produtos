import { Component, inject } from '@angular/core';
import {ThemeToggle} from '../theme-toggle/theme-toggle';
import { MatIcon } from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle, RouterLink, RouterLinkActive, MatIcon, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly cartService = inject(CartService);

  protected readonly totalUnitsInCart = this.cartService.totalUnitsInCart;
}
