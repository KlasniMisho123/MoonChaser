import { Component,  inject,  input,  OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { moonPhaseInfo } from '../constant/constant'

@Component({
  selector: 'app-moon',
  imports: [CommonModule, FormsModule],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent implements OnInit{

weatherService = inject(GetWeatherService)

// on init Values
currentMoonPhase: string = "";
selectedCity: string = "";

// Date Format Values
currentDate:string = "";
rawDate!:Date;
year!:string;
month!:string; 
day!:string; 

// targetedMoonPhaseCard Values
targetedMoonPhase:number = -1;
isMoonPhaseSelected:boolean = false;
selecteMoonPhaseInfo:{} ={}

selectedMoonPhaseInfo: {
  imgSrc?: string;
  label?: string;
  description?: string;
  energy?: string;
  visibility?: string;
  nextPhase?: string;
} = {};

ngOnInit(): void {
  // this.getCurrentMoonPhase(this.selectedCity)
}

  targetMoonPhaseCard(cardIndex:number) {
    if(cardIndex === this.targetedMoonPhase) {
    this.isMoonPhaseSelected = false
    this.targetedMoonPhase = -1;
    this.selecteMoonPhaseInfo = {};
    } else {
      this.isMoonPhaseSelected = true;
      this.targetedMoonPhase = cardIndex;
      this.setMoonPhaseInfo(cardIndex)
    }
  }

  setMoonPhaseInfo(cardIndex:number):void {
    this.selectedMoonPhaseInfo = moonPhaseInfo[cardIndex];
  }

  rotateWithMoonPhase(cardIndex: number) {
    switch (cardIndex) {
      case 0:
        // code for new moon
        console.log("New Moon");
        break;
      case 1:
        // code for waxing crescent
        console.log("Waxing Crescent");
        break;
      case 2:
        // code for first quarter
        console.log("First Quarter");
        break;
      case 3:
        // code for waxing gibbous
        console.log("Waxing Gibbous");
        break;
      case 4:
        // code for full moon
        console.log("Full Moon");
        break;
      case 5:
        // code for waning gibbous
        console.log("Waning Gibbous");
        break;
      case 6:
        // code for last quarter
        console.log("Last Quarter");
        break;
      case 7:
        // code for waning crescent
        console.log("Waning Crescent");
        break;
      default:
        console.log("Unknown phase");
        break;
    }
  }
  

  getCurrentMoonPhase(inputedCity:string) {
    this.rawDate = new Date();

    this.selectedCity = inputedCity;
    this.year = this.rawDate.getFullYear().toString();
    this.month = (this.rawDate.getMonth() + 1).toString().padStart(2, '0');
    this.day = this.rawDate.getDate().toString().padStart(2, '0');
    this.currentDate = this.year + "-" + this.month + "-" + this.day

    this.weatherService.getAstronomyInfo(this.selectedCity, this.currentDate).subscribe({
      next: (res:any) => {
        console.log("res: ", res)
        this.currentMoonPhase = res.astronomy.astro.moon_phase
      }, 
      error: (err) => {
        console.log("Astronomy API ERROR: ", err)
      }
    })
  }

}
