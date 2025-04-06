import { Component, inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SevenDaysForecast } from '../../model/interface/weather';

@Component({
  selector: 'app-weekly-weather',
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './weekly-weather.component.html',
  styleUrl: './weekly-weather.component.css'
})
export class WeeklyWeatherComponent {
  inputedCity:string = "";
  weatherSectionActive: string = "false"
  weatherInfo!: SevenDaysForecast;
  currentDate = new Date()
  weatherService = inject(GetWeatherService)
  infoInC: boolean = true;
  selectDisplayDay!: number;

  targetedWeekDay: {} = {}

  changeInfoType(infoType:boolean):void {
    this.infoInC = infoType
  }

  selectWeekDay(index:number) {
    this.selectDisplayDay = index
    console.log(index)


  }

  getWeeklyWeather(inputedCity: string): void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe({
      next: (res: SevenDaysForecast) => {
        this.weatherSectionActive = "active";
        this.selectDisplayDay = 0;

        this.weatherInfo = res;

        this.targetedWeekDay = {
          icon : res.current.condition.icon,
          temp_c: res.current.temp_c,
          temp_f: res.current.temp_f,
          precip_mm: res.current.precip_mm,
          precip_in: res.current.precip_in,
          humidity: res.current.humidity,
          wind_kph: res.current.wind_kph,
          wind_mph: res.current.wind_mph,
          text: res.current.condition.text
        }

        console.log(res);
  
        // Store only the forecast days
        
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