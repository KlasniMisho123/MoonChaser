import { Component, inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weekly-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weekly-weather.component.html',
  styleUrl: './weekly-weather.component.css'
})
export class WeeklyWeatherComponent {
  inputedCity:string = "";
  currentTemperature = 0;

  weatherService = inject(GetWeatherService)

  getWeeklyWeather(inputedCity:string):void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe((res: any) => {
      console.log(res)
    })
  }
}
