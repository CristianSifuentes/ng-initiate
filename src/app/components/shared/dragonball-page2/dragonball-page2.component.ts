import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number
 }


@Component({
  imports: [NgClass],
  templateUrl: './dragonball-page2.component.html',
  styleUrl: './dragonball-page2.component.css'
})
export class DragonballPage2Component {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Frieza', power: 10000 },
    { id: 6, name: 'Cell', power: 9500 },
    { id: 7, name: 'Majin Buu', power: 11000 },
    { id: 8, name: 'Trunks', power: 7500 },
    { id: 9, name: 'Krillin', power: 5000 },
    { id: 10, name: 'Bulma', power: 1000 },
    { id: 11, name: 'Yamcha', power: 4000 },
    { id: 12, name: 'Tenshinhan', power: 6000 },
  ]);
  powerClasses = computed(() => {
    return {
      'text-danger': true
    };
  });
}

