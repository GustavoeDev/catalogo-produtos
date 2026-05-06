import { Component } from '@angular/core';
import {ProductCard} from '../../components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [
    ProductCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
