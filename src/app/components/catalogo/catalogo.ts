import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../Services/product.service';
import { ProductCardComponent } from '../components/producto-card/producto-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
})
export class CatalogoComponent {
  private productService = inject(ProductsService);
  // Signal con el arreglo de productos (valor inicial: [])
  products = toSignal(this.productService.getAll(), { initialValue: [] });
}

