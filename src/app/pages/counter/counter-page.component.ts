import { Component } from "@angular/core";

@Component({
  // template:`

  //   <h1>Hi </h1>
  //   <p>Counter page {{ counter }}</p>
  //   <!-- <button (click)="counter = counter + 1">Increment</button> -->
  //   <button (click)="increaseBy(1)">Increment</button>
  //   <button (click)="decreaseBy(1)">Decrement</button>

  //   `
  templateUrl: './counter-page.component.html',
  styles: `
     button {
      padding: 5px;
      margin: 5px 10px;
      with: 75px;
     }
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
  reset(){
    this.counter = 0;
  }

}
