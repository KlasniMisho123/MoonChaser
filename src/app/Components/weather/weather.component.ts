import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  currentWeatherSection: string = "Daily"

  setWeatherSection(section:string): void {
    this.currentWeatherSection = section
  }

}
