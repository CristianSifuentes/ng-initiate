import { Component } from "@angular/core";

@Component({
  template:`

    <h1>Hi </h1>
    <p>Counter page {{ counter }}</p>
    <!-- <button (click)="counter = counter + 1">Increment</button> -->
    <button (click)="increaseBy(1)">Increment</button>
    <button (click)="decreaseBy(1)">Decrement</button>

    `
})
export class CounterPageComponent {

  counter = 15;

  increaseBy(value: number) {
    this.counter += value;
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }

}
