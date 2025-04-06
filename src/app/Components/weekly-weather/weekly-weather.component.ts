import { Component, inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SevenDaysForecast } from '../../model/interface/weather';

@Component({
  selector: 'app-weekly-weather',
  imports: [FormsModule, CommonModule],
  templateUrl: './weekly-weather.component.html',
  styleUrl: './weekly-weather.component.css'
})
export class WeeklyWeatherComponent {
  inputedCity:string = "";
  weatherSectionActive: string = "false"
  weatherInfo!: SevenDaysForecast;
  weatherService = inject(GetWeatherService)

  getWeeklyWeather(inputedCity: string): void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe({
      next: (res: SevenDaysForecast) => {
        this.weatherSectionActive = "active";
        console.log(res);
  
        // Store only the forecast days
        this.weatherInfo = res;
      },
      error: (err) => {
        this.weatherSectionActive = "invalid";
      }
    });
  }
}


// this.weatherInfo = {
//   daily: res.forecast.forecastday.map((day: any) => ({
//     date: day.date,
//     temp_c: day.day.avgtemp_c,
//     feelslike_c: day.day.feelslike_c ?? day.day.avgtemp_c,
//     wind_kph: day.day.maxwind_kph,
//     cloud: day.day.avghumidity, // or `day.day.cloud` if it's there
//     condition: {
//       text: day.day.condition.text,
//       icon: day.day.condition.icon
//     }
//   }))
// };