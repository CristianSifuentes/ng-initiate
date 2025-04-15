import { Component, signal, computed, effect, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule], // 👈 required to use ngModel
  template: `
    <div class="profile-card">
      <h2>User Profile</h2>
      <label>First Name: <input [ngModel]="firstName()" (ngModelChange)="updateFirstName($event)" /></label>
      <label>Last Name: <input [ngModel]="lastName()" (ngModelChange)="updateLastName($event)" /></label>
      <label>Email: <input [ngModel]="user().email" (ngModelChange)="updateEmail($event)" /></label>
      <hr />
      <p>Full Name: {{ fullName() }}</p>
      <p>Email: {{ user().email }}</p>
    </div>
  `,
  styles: [
    `.profile-card {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 8px;
      width: 320px;
    }`,
    `label { display: block; margin-bottom: 0.5rem; }`,
    `input { width: 100%; padding: 0.25rem; margin-top: 0.25rem; }`
  ]
})
export class UserProfileComponent {
  firstName = signal('Ada');
  lastName = signal('Lovelace');
  user: WritableSignal<UserProfile> = signal({
    firstName: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@angular.dev'
  });
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  constructor() {
    effect(() => {
      const currentEmail = this.user().email;
      if (currentEmail.endsWith('@example.com')) {
        console.warn(`Warning: Placeholder email detected: ${currentEmail}`);
      }
    });
  }
  updateFirstName(value: string) {
    this.firstName.set(value);
    this.user.update(current => ({
      ...current,
      firstName: value
    }))
  }
  updateLastName(value: string) {
    this.lastName.set(value);
    this.user.update(current => ({
      ...current,
      lastName: value
    }))
  }
  updateEmail(value: string) {
    this.lastName.set(value);
    this.user.update(current => ({
      ...current,
      email: value
    }))
  }
}
