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

// rotatewithMoonPhases 
activeStyle:string = ""

currentLocationInfo: {} ={};
currentMoonPhase: {} ={};

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
    this.selectedMoonPhaseInfo = {};
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
        this.activeStyle = "rotate-[-135deg]";
        break;
      case 2:
        this.activeStyle = "rotate-[-180deg]";
        break;
      case 3:
        this.activeStyle = "rotate-[-225deg]";
        break;
      case 4:
        this.activeStyle = "rotate-[-270deg]";
        break;
      case 5:
        this.activeStyle = "rotate-[-315deg]";
        break;
      case 6:
        this.activeStyle = "rotate-[-360deg]";
        break;
      case 7:
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
        this.currentMoonPhase = res.astronomy.astro
        this.currentLocationInfo = res.location
      }, 
      error: (err) => {
        console.log("Astronomy API ERROR: ", err)
      }
    })
  }

}
