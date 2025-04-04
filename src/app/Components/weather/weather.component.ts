import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WeeklyWeatherComponent } from '../weekly-weather/weekly-weather.component';
import { DailyWeatherComponent } from '../daily-weather/daily-weather.component';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, DailyWeatherComponent, WeeklyWeatherComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  currentWeatherSection: string = "Daily"

  setWeatherSection(section:string): void {
    this.currentWeatherSection = section
  }

}
