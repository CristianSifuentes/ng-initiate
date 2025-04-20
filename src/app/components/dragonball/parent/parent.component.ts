import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../../interfaces/product.interface';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  products = signal<Product[]>([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
  ]);

  characters = signal<Character[]>([
    { id: 1, name: 'Vegeta', power: 8500 },
    { id: 2, name: 'Piccolo', power: 7000 }
  ]);
  // characters = input.required<Character[]>();
  //  characters = signal<Character[]>([]);
  // characters = input.optional<Character[]>([]);


  addProduct(){
    const next = { id: Date.now(), name: 'Product 5' };
    this.products.update((list) => [...list, next]);
  }


  handleAdd(character: Character) {
    this.characters.update(prev => [...prev, character]);
  }

  handleRemove(character: Character) {
    this.characters.update(prev => prev.filter(c => c.id !== character.id));
  }


}
