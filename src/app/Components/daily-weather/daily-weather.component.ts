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
  weatherSectionActive: string= "false";
  weatherService = inject(GetWeatherService);


  clearInfo() {
    this.currentTemC = 0;
  }

  getDailyWeather(inputedCity: string):void {
    // debugger;
        this.clearInfo()
        this.weatherService.getDailyWeather(inputedCity).subscribe({
          next: (res: any) => {
            this.weatherSectionActive = "true"
            console.log("Current Weather Res:", res);
            this.currentTemC = res.current.temp_c;
          },
          error: (err) => {
            this.weatherSectionActive = "invalid"
            console.log("ERROR");
          }
          })

      // Clear InputedCity
  }

}
