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
  cardIndex: number = 0;
  isFirstLoad: boolean = true;

  ngOnInit(): void {
    // this.getCurrentWeather()
  }

  ToggleCardIndex() {
    console.log('Before:', this.cardIndex);
  
    if (this.cardIndex === 0) {
      this.cardIndex = 1;
    } else if (this.cardIndex === 1) {
      this.cardIndex = 0;
    }
  
    console.log('After:', this.cardIndex);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isFirstLoad = false;
    }, 0);
  }
  
}
