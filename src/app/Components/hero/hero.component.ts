import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  isNight: boolean = true;

  constructor(private renderer: Renderer2) {}

  toggleDayNight():void {
    this.isNight = !this.isNight

    if(this.isNight) {
      this.renderer.addClass(document.body, 'night-mode');
      this.renderer.removeClass(document.body, 'day-mode');
    } else {
      this.renderer.addClass(document.body, 'day-mode');
      this.renderer.removeClass(document.body, 'night-mode');
    }
  }
}
