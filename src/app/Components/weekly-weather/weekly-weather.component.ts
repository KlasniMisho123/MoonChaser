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
  // weatherInfo!: SevenDaysForecast;
  weatherInfo!: any;
  currentDate = new Date()
  weatherService = inject(GetWeatherService)
  infoInC: boolean = true;
  selectDisplayDay!: number;

  targetedWeekDay!: TargetedWeekDay;

  changeInfoType(infoType:boolean):void {
    this.infoInC = infoType
  }

  getWeeklyWeather(inputedCity: string): void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe({
      next: (res: any) => {
      // next: (res: SevenDaysForecast) => {
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
      },
      error: (err) => {
        this.weatherSectionActive = "invalid";
      }
    });
  }

  selectWeekDay(index:number): void {
    this.selectDisplayDay = index

    const selectedDay = this.weatherInfo.forecast.forecastday[index].day;

    this.targetedWeekDay = {
    icon: selectedDay.condition.icon,
    avgtemp_c: selectedDay.avgtemp_c,
    avgtemp_f: selectedDay.avgtemp_f,
    totalprecip_mm: selectedDay.totalprecip_mm,
    totalprecip_in: selectedDay.totalprecip_in,
    avghumidity: selectedDay.avghumidity,
    maxwind_kph: selectedDay.maxwind_kph,
    maxwind_mph: selectedDay.maxwind_mph,
    text: selectedDay.condition.text
  };

  }
}
