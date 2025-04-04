import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-daily-weather',
  imports: [FormsModule],
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css'
})
export class DailyWeatherComponent {
  inputedCity: string = ""

  getInputedCity(city:string):void {
    this.inputedCity = city
    console.log(city)
  }
}
