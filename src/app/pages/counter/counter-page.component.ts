import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

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
      width: 75px;
     }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  //Zonejs -> Zoneless

  counter = 15;
  counterSignal = signal(10);

  constructor() {
     setInterval(()=> {
      console.log('Interval called')
      // this.counterSignal.update((v) => v + 1);
      //this.increaseBy(1);
      // this.counter += 1;
     }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((prev) => prev + value);

  }
  decreaseBy(value: number) {
    this.counter -= value;
  }
  reset(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
