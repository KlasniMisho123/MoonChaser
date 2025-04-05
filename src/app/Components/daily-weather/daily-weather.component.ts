import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetWeatherService } from '../../Services/get-weather.service';


@Component({
  selector: 'app-daily-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css'
})
export class DailyWeatherComponent {
  inputedCity: string = ""

  weatherService = inject(GetWeatherService)

  getWeather(cityName:string):void {
    this.inputedCity = cityName
    console.log(cityName)
  }

  getDailyWeather() {
    this.weatherService.getDailyWeather("Tbilisi").subscribe((res: any) => {
      if(res.result) {
        alert("RES EXISTS")
      } else {
        alert("RES DOESNOT EXISTS")
      }
    })
  }
}
