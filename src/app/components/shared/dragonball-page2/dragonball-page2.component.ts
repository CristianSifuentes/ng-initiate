import { NgClass } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { CharacterListComponent } from '../../dragonball/character-list/character-list.component';
import { Character } from '../../../interfaces/character.interface';
import { CharacterAddComponent } from '../../dragonball/character-add/character-add.component';

// interface Character {
//   id: number;
//   name: string;
//   power: number
//  }


@Component({
  // imports: [NgClass],
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-page2.component.html',
  styleUrl: './dragonball-page2.component.css'
})
export class DragonballPage2Component {

   characters = signal<Character[]>([]);
//   // characters = input.required<Character[]>();
//  //   characters = input.required<Character[]>().signal;

//   //  characters = signal<Character[]>([
//   // //   { id: 1, name: 'Goku', power: 9000 },
//   // //   { id: 2, name: 'Vegeta', power: 8500 },
//   // //   { id: 3, name: 'Gohan', power: 8000 },
//   // //   { id: 4, name: 'Piccolo', power: 7000 },
//   // //   { id: 5, name: 'Frieza', power: 10000 },
//   // //   { id: 6, name: 'Cell', power: 9500 },
//   // //   { id: 7, name: 'Majin Buu', power: 11000 },
//   // //   { id: 8, name: 'Trunks', power: 7500 },
//   // //   { id: 9, name: 'Krillin', power: 5000 },
//   // //   { id: 10, name: 'Bulma', power: 1000 },
//   // //   { id: 11, name: 'Yamcha', power: 4000 },
//   // //   { id: 12, name: 'Tenshinhan', power: 6000 },
//   //  ]);
//   powerClasses = computed(() => {
//     return {
//       'text-danger': true
//     };
//   });

//   // addCharacter(){
//   //   // if(!this.name() || this.power() <= 0) {
//   //   //   return;
//   //   // }
//   //   // const newCharacter: Character = {
//   //   //   id: this.characters().length + 1,
//   //   //   name: this.name(),
//   //   //   power: this.power()
//   //   // };
//   //   // this.characters.update((list) => [...list, newCharacter]);
//   //   // // this.characters().push(newCharacter);
//   //   // this.resetfields();


//   // }
//   // resetfields() {
//   //   // this.name.set('');
//   //   // this.power.set(0);
//   // }

}

