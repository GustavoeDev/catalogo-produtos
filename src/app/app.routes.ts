import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produto/:id', component: ProductDetail },
  { path: 'carrinho', component: Cart },
];
