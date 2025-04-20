import { Component, signal, computed, effect, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}


@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [FormsModule], // 👈 required to use ngModel
  template: `
    <input [ngModel]="name()" (ngModelChange)="name.set($event)" />
    <p>Hello, {{ name() }}</p>
  `
})
export class StandaloneComponent {
  name = signal('');

  user: WritableSignal<UserProfile> = signal({
    firstName: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@angular.dev'
  });

  updateFirstName(value: string) {
    // this.user.mutate(user => user.firstName = value);
    this.user.update(current => ({
      ...current,
      firstName: value
    }))
  }

}
