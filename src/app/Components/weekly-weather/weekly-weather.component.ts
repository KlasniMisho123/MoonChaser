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
        this.targetedWeekDay = {

        }
        // [src]="'https:' + weatherInfo.current.condition.icon"
        // {{infoInC? weatherInfo.current.temp_c : weatherInfo.current.temp_f}}
        // {{infoInC? weatherInfo.current.precip_mm  + ' mm' : weatherInfo.current.precip_in + ' in'}}
        // {{weatherInfo.current.humidity}}
        // {{infoInC? weatherInfo.current.wind_kph + ' km/h' : weatherInfo.current.wind_mph + ' mph'}}
        // {{ currentDate | date:'mediumDate' }
        // {{weatherInfo.current.condition.text}}
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