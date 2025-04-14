import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
