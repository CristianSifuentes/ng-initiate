
import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";


@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  name = signal('Ironman');
  age= signal(45);

   fullDescription = computed(() => {
     const desciptionFull = `${this.name()} - ${this.age()}`.toUpperCase();
     return desciptionFull
   });

   capitalizeName = computed(() => this.name().toUpperCase());



  constructor() {
    this.upperCase();
  }
  changeHero(){
    this.name.update((prev) => prev === 'Ironman' ? 'Spiderman' : 'Ironman');

  }
  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }
  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge(){
    this.age.update((prev) => prev === 45 ? 22 : 45);

  }
  upperCase(){
    return `${this.name()} - ${this.age()}`.toUpperCase();
  }



}
