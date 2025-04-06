import { Component, inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weekly-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weekly-weather.component.html',
  styleUrl: './weekly-weather.component.css'
})
export class WeeklyWeatherComponent {
  inputedCity:string = "";
  weatherSectionActive: string = "false"

  weatherService = inject(GetWeatherService)

  getWeeklyWeather(inputedCity:string):void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe({
      next: (res: any) => {
        this.weatherSectionActive = "active"
        console.log(res)
      }, 
      error: (err) => {
        this.weatherSectionActive = "invalid"
      }
    })
  }
}
