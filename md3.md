# 🧭 Angular 19 Feature & Best Practices Guide

This document offers a concise yet professional overview of Angular 19 features and recommended practices. Whether you're modernizing existing projects or starting from scratch, this guide ensures you align with Angular's latest reactive ecosystem.

---

## 📌 RouterLink
Use `RouterLink` for declarative navigation in templates:
```html
<a routerLink="/dashboard">Dashboard</a>
```
- Binds routes directly to anchor tags.
- Avoids programmatic routing unless necessary.

## 📌 RouterLinkActive
Applies classes when a route is active:
```html
<a routerLink="/profile" routerLinkActive="active">Profile</a>
```
- Add `[routerLinkActiveOptions]="{ exact: true }"` for stricter matching.

---

## 🔁 Nuevo Control Flow (`@for`, `@if`)
Angular now includes a **more ergonomic syntax**:
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

@if (user.loggedIn) {
  <p>Welcome!</p>
}
```
- These replace `*ngFor`, `*ngIf` with better readability and IDE tooling.

---

## 🎨 `ngClass`, `ngStyle`, and Alternatives
- Prefer `[class.class-name]="condition"` over `ngClass` for simple cases.
- Consider Signals + computed CSS classes for dynamic styling in a reactive way:
```ts
const isActive = signal(false);
const buttonClass = computed(() => isActive() ? 'btn-primary' : 'btn-secondary');
```
```html
<button [class]="buttonClass()">Click Me</button>
```

---

## 📡 Comunicación entre componentes
### Input & Output (Old)
```ts
@Input() title: string = '';
@Output() updated = new EventEmitter<string>();
```
### Input & Output with Signals (New Angular)
```ts
@Input({ required: true }) title = input<string>();
@Output() updated = output<string>();
```

---

## 🧠 Servicios en Angular
Use services for shared state and business logic:
```ts
@Injectable({ providedIn: 'root' })
export class UserService {
  user = signal<User>({ id: 1, name: 'John' });
}
```
- Combine with `inject(UserService)` in components.

---

## 📦 Efectos y LocalStorage
Create effects to sync signals to `localStorage`:
```ts
effect(() => {
  localStorage.setItem('theme', theme());
});
```
- Combine with `signal(localStorage.getItem('theme') || 'light')`

---

## 🔗 LinkedSignal
Two-way linked state between signals:
```ts
const name = signal('');
const upperName = linkedSignal({
  get: () => name().toUpperCase(),
  set: v => name.set(v.toLowerCase())
});
```
- Great for dynamic transformations.

---

## 🧭 HashRouter
Use `HashLocationStrategy` when deploying to static servers without full server rewrite support:
```ts
{ provide: LocationStrategy, useClass: HashLocationStrategy }
```
Add `useHash: true` in `RouterModule.forRoot()` config if using traditional modules.

---

## 🚀 Despliegues
- Use `ng deploy` with `angular-cli-ghpages` for GitHub Pages.
- Use `ng build --base-href=/project-name/` for subfolder deployments.
- Deploy to Firebase, Netlify, or Vercel for CI/CD ease.

---

> Stay up to date with Angular Signals, standalone components, and ergonomic templating. Angular 19 isn’t just faster — it’s more expressive, modular, and elegant.
