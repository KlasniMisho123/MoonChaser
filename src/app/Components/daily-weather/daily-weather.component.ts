import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-daily-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css'
})
export class DailyWeatherComponent {
  inputedCity: string = ""

  getWeather(cityName:string):void {
    this.inputedCity = cityName
    console.log(cityName)
  }
}
