---
title: "Fixing 'ngModel' and 'ngClass' Errors in Angular 19 Standalone Components"
author: Cristian Sifuentes
date: April 16, 2025
---

# Fixing `ngModel` and `ngClass` Errors in Angular 19 Standalone Components

If you're building a modern Angular 19 app using **standalone components**, chances are you've encountered this error:

```bash
Can't bind to 'ngModel' since it isn't a known property of 'input'
Can't bind to 'ngClass' since it isn't a known property of 'li'
```

These errors are common—and completely expected—when the required Angular modules are **not imported explicitly** in standalone components. Let’s explore why this happens and how to resolve it like a pro.

---

## 🎯 The Problem

In Angular 19, many developers are adopting **standalone components** to reduce boilerplate and improve modularity. However, unlike traditional NgModules, **standalone components must declare their dependencies explicitly via the `imports` array**.

So, if you use template features like:

- `[(ngModel)]` for two-way binding
- `[ngClass]` for conditional class styling

You’ll need to **import the respective Angular modules**: `FormsModule` and `CommonModule`.

---

## ✅ The Solution

Update your standalone component definition to include required modules in the `imports` property of the `@Component` decorator.

### 📦 Example Fix: `dragonball.component.ts`

```html
<!-- dragonball.component.html -->
<div class="dbz-container">
  <h1 class="dbz-title">⚡ Dragon Ball Power Level Tracker ⚡</h1>

  <form class="dbz-form" (ngSubmit)="addCharacter()">
    <input
      type="text"
      placeholder="Character Name"
      [(ngModel)]="newCharacter.name"
      name="name"
      required
    />
    <input
      type="number"
      placeholder="Power Level"
      [(ngModel)]="newCharacter.powerLevel"
      name="powerLevel"
      required
    />
    <button type="submit">Add Fighter</button>
  </form>

  <ul class="dbz-list">
    <li *ngFor="let character of characters" [ngClass]="getPowerClass(character.powerLevel)">
      <span class="name">{{ character.name }}</span>
      <span class="power">PL: {{ character.powerLevel }}</span>
      <button class="remove" (click)="removeCharacter(character)">✖</button>
    </li>
  </ul>
</div>

```


```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Include necessary Angular modules
  templateUrl: './dragonball.component.html',
  styleUrls: ['./dragonball.component.scss'],
})
export class DragonBallComponent {
  newCharacter = { name: '', powerLevel: 0 };
  characters: { name: string; powerLevel: number }[] = [];

  addCharacter() {
    if (this.newCharacter.name && this.newCharacter.powerLevel > 0) {
      this.characters.push({ ...this.newCharacter });
      this.newCharacter = { name: '', powerLevel: 0 };
    }
  }

  removeCharacter(character: { name: string; powerLevel: number }) {
    this.characters = this.characters.filter(c => c !== character);
  }

  getPowerClass(powerLevel: number): string {
    if (powerLevel >= 9000) return 'super-saiyan';
    if (powerLevel >= 3000) return 'strong';
    return 'normal';
  }
}
```

---

## 🔍 Why This Happens

In Angular’s standalone ecosystem, components are **self-contained** and don’t inherit module-level configuration like before. That means:

- No implicit access to directives like `NgModel`, `NgClass`, `NgIf`, etc.
- You must **opt-in** to each dependency your component needs.

This behavior is by design. It promotes **explicitness** and better tree-shaking during builds.

---

## 🧠 Best Practices

- When using `[(ngModel)]`, always ensure `FormsModule` is imported.
- When using structural or attribute directives like `*ngIf`, `*ngFor`, `ngClass`, `ngStyle`, etc., import `CommonModule`.
- Keep components lean and self-sufficient by **only importing what is required**.

---

## 🔧 Need Full Setup?

Make sure you're also bootstrapping your application using standalone APIs (introduced in Angular 14+):

```ts
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [],
});
```

---

## 📌 Conclusion

Modern Angular offers powerful flexibility through standalone components—but with that comes the responsibility of managing dependencies yourself.

Next time you see those cryptic `ngModel` or `ngClass` errors, remember: **they're not bugs—they're reminders to be explicit**. 💡

_Happy coding with Angular 19! And remember: with great standalone power comes great module responsibility._
