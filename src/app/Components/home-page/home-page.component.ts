import { Component, inject, OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  weatherText:string = "";
  weatherService = inject(GetWeatherService)
  cardIndex: number = 3;

  ngOnInit(): void {
    // this.getCurrentWeather()
  }

  ToggleCardIndex() {
    if( this.cardIndex === 0 || this.cardIndex === 3) {
      this.cardIndex = 1;
      console.log(this.cardIndex)
    } else {
      this.cardIndex = 0;
      console.log(this.cardIndex)
    }
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
