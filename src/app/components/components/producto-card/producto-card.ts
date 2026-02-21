import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './producto-card.html',
  styleUrls: ['./producto-card.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
