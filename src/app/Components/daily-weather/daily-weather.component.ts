import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetWeatherService } from '../../Services/get-weather.service';


@Component({
  selector: 'app-daily-weather',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css'
})
export class DailyWeatherComponent {
  inputedCity: string = "";
  currentTemC: number = 0;
  weatherSectionActive: string= "false";
  weatherService = inject(GetWeatherService);
  currentDate = new Date()

  clearInfo() {
    this.currentTemC = 0;
  }

  getDailyWeather(inputedCity: string):void {
    // debugger;
        this.clearInfo()
        this.weatherService.getDailyWeather(inputedCity).subscribe({
          next: (res: any) => {
            this.weatherSectionActive = "active"
            console.log("Current Weather Res:", res);
            this.currentTemC = res.current.temp_c;
            this.inputedCity = inputedCity
          },
          error: (err) => {
            this.weatherSectionActive = "invalid"
            console.log("ERROR");
          }
          })

      // Clear InputedCity
  }

}
