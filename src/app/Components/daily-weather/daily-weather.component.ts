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
  inputedCity: string = "";
  currentTemC: number = 0;
  weatherService = inject(GetWeatherService)

  getDailyWeather(inputedCity: string):void {
     // debugger;
        this.weatherService.getDailyWeather(inputedCity).subscribe((res: any) => {
          console.log("Current Weather Res: ", res)
          this.currentTemC = res.current.temp_c
        })
      // Clear InputedCity
  }

  getWeeklyWeather(inputedCity: string):void {
    this.weatherService.getWeeklyWeather(inputedCity).subscribe((res: any) =>{
      console.log("Weekly Weather Res: ", res)
    })
  }
}
