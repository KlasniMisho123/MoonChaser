import { Component, inject, OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { weatherTypeInfo } from '../constant/constant';

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
  isWeathertypeSelected:boolean = false;
  targetedWeatherType:number = -1;
  selecteWeatherTypeInfo:{} = {};
  

  ngOnInit(): void {
      setTimeout(() => {
        this.ToggleCardIndex()
      }, 5000);
      // toggle in every 10 sec or something
  }
  

  ToggleCardIndex() {
    this.isFirstLoad = false;
    if (this.cardIndex === 0) {
      this.cardIndex = 1;
    } else if (this.cardIndex === 1) {
      this.cardIndex = 0;
    }
  }

  targetWeatherCard(weatherType:number) {
    if(weatherType === this.targetedWeatherType) {
      this.isWeathertypeSelected = false
      this.targetedWeatherType = -1;
      this.selecteWeatherTypeInfo = {};
    } else {
      this.isWeathertypeSelected = true
      this.targetedWeatherType = weatherType;
      this.setWeatherTypeInfo(weatherType)
    }
  }
  
  setWeatherTypeInfo(index:number):void {
    this.selecteWeatherTypeInfo = weatherTypeInfo[index];
  }
}
