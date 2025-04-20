import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-dragonball',
    standalone: true,
    imports: [CommonModule, FormsModule], // 👈 Include necessary Angular modules
    templateUrl: './dragonball.component.html',
    styleUrls: ['./dragonball.component.scss'],
  })
  export class DragonBallComponent {
    newCharacter = {name : '', powerLevel: 0};
    characters: { name: string; powerLevel: number }[] = [];

    addCharacter() {
      if(this.newCharacter.name && this.newCharacter.powerLevel > 0) {
        this.characters.push({ ...this.newCharacter });
        this.newCharacter = { name: '', powerLevel: 0 };
      }
    }



    removeCharacter(character: { name: string; powerLevel: number }) {
      this.characters = this.characters.filter(c => c !== character);
    }
    getPowerClass(powerLevel: number): string {
      if (powerLevel >= 9000) return 'super-saiyanc';
      if (powerLevel >= 3000) return 'strong';
      return 'normal';
    }
  }
