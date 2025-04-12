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

// rotatewithMoonPhases 
activeStyle:string = ""


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
  this.rotateWithMoonPhase(this.targetedMoonPhase)
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
    this.rotateWithMoonPhase(this.targetedMoonPhase)
  }

  setMoonPhaseInfo(cardIndex:number):void {
    this.selectedMoonPhaseInfo = moonPhaseInfo[cardIndex];
  }

  rotateWithMoonPhase(cardIndex: number) {
    switch (cardIndex) {
      case -1:
        this.activeStyle = "rotate-[-90deg]"
        break;
      case 0:
        this.activeStyle = "rotate-[-90deg]"
        break;
      case 1:
        // code for waxing crescent
        // this.activeStyle = "Waxing Crescent";
        this.activeStyle = "rotate-[-135deg]";
        break;
      case 2:
        // code for first quarter
        // this.activeStyle = "First Quarter";
        this.activeStyle = "rotate-[-180deg]";
        break;
      case 3:
        // code for waxing gibbous
        // this.activeStyle = "Waxing Gibbous";
        this.activeStyle = "rotate-[-225deg]";
        break;
      case 4:
        // code for full moon
        // this.activeStyle = "Full Moon";
        this.activeStyle = "rotate-[-270deg]";
        break;
      case 5:
        // code for waning gibbous
        // this.activeStyle = "Waning Gibbous";
        this.activeStyle = "rotate-[-315deg]";
        break;
      case 6:
        // code for last quarter
        // this.activeStyle = "Last Quarter";
        this.activeStyle = "rotate-[-360deg]";
        break;
      case 7:
        // code for waning crescent
        // this.activeStyle = "Waning Crescent";
        this.activeStyle = "rotate-[-405deg]";
        break;
      default:
        this.activeStyle = "rotate-[-90deg]"
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
