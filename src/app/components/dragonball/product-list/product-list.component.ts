import { ChangeDetectionStrategy, Component, Input, input, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
 imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products = signal<Product[]>([]);
  @Input() products2: any[] = [];


}
