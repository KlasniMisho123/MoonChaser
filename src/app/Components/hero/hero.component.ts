import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  isNight: boolean = true;

  toggleDayNight():void {
    this.isNight = !this.isNight
  }
}
