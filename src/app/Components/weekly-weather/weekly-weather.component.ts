import { Component, inject } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SevenDaysForecast, TargetedWeekDay } from '../../model/interface/weather';

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

  targetedWeekDay!: TargetedWeekDay;

  changeInfoType(infoType:boolean):void {
    this.infoInC = infoType
  }

  selectWeekDay(index:number) {
    this.selectDisplayDay = index
    console.log(index)


  }

  getWeeklyWeather(inputedCity: string): void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe({
      next: (res: any) => {
        this.weatherSectionActive = "active";
        this.selectDisplayDay = 0;

        this.weatherInfo = res;

        this.targetedWeekDay = {
          icon: res.forecast.forecastday[this.selectDisplayDay].day.condition.icon,
          avgtemp_c: res.forecast.forecastday[this.selectDisplayDay].day.avgtemp_c,
          avgtemp_f: res.forecast.forecastday[this.selectDisplayDay].day.avgtemp_f,
          totalprecip_mm: res.forecast.forecastday[this.selectDisplayDay].day.totalprecip_mm,
          totalprecip_in: res.forecast.forecastday[this.selectDisplayDay].day.totalprecip_in,
          avghumidity: res.forecast.forecastday[this.selectDisplayDay].day.avghumidity,
          maxwind_kph: res.forecast.forecastday[this.selectDisplayDay].day.maxwind_kph,
          maxwind_mph: res.forecast.forecastday[this.selectDisplayDay].day.maxwind_mph,
          text: res.forecast.forecastday[this.selectDisplayDay].day.condition.text
        };
        
        
        
        // this.targetedWeekDay = {
        //   icon : res.current.condition.icon,
        //   temp_c: res.current.temp_c,
        //   temp_f: res.current.temp_f,
        //   precip_mm: res.current.precip_mm,
        //   precip_in: res.current.precip_in,
        //   humidity: res.current.humidity,
        //   wind_kph: res.current.wind_kph,
        //   wind_mph: res.current.wind_mph,
        //   text: res.current.condition.text
        // }

        console.log(res);        
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