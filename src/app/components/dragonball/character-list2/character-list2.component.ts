// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, input, Output } from '@angular/core';

// interface Character {
//   id: number;
//   name: string;
// }

// @Component({
//   selector: 'app-character-list',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <ul>
//       <li *ngFor="let c of characters()">
//         {{ c.name }}
//         <button (click)="remove.emit(c)">❌</button>
//       </li>
//     </ul>

//     <button (click)="addCharacter()">Add Goku</button>
//   `,
// })
// export class CharacterListComponent {
//   characters = input.required<Character[]>().signal;

//   @Output() add = new EventEmitter<Character>();
//   @Output() remove = new EventEmitter<Character>();

//   addCharacter() {
//     const newChar: Character = { id: Date.now(), name: 'Goku' };
//     this.add.emit(newChar);
//   }
// }
