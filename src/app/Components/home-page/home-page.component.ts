import { Component, inject, OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  weatherText:string = "";
  weatherService = inject(GetWeatherService)

  ngOnInit(): void {
    // this.getCurrentWeather()
  }

  

  // getCurrentWeather():void {
  //   this.weatherService.getDailyWeather('').subscribe({
  //     next:(res) => {

  //     },
  //     error:(err) => {
  //       console.log(err)
  //     }
  //   })
  // }
}
