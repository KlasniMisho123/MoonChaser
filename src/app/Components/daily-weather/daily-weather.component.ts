import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetWeatherService } from '../../Services/get-weather.service';
import { SimpleWeatherResponse } from '../../model/interface/weather';


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
  weatherInfo!: SimpleWeatherResponse;

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

            this.weatherInfo = {
              location: {
                name: res.location.name,
                country: res.location.country,
                localtime: res.location.localtime
              },
              current: {
                temp_c: res.current.temp_c,
                temp_f: res.current.temp_f,
                humidity: res.current.humidity,
                condition: {
                  text: res.current.condition.text,
                  icon: res.current.condition.icon
                },
                wind_kph: res.current.wind_kph,
                wind_mph: res.current.wind_mph,
                wind_degree: res.current.wind_degree,
                wind_dir: res.current.wind_dir,
                cloud: res.current.cloud,
                feelslike_c: res.current.feelslike_c,
                windchill_c: res.current.windchill_c
              }
            };

          },
          error: (err) => {
            this.weatherSectionActive = "invalid"
            console.log("ERROR");
          }
          })

      // Clear InputedCity
  }

}
