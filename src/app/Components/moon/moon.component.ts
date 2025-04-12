import { Component,  inject,  OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moon',
  imports: [CommonModule],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent implements OnInit{

weatherService = inject(GetWeatherService)

currentMoonPhase: string = "";
currentDate:string = "";

rawDate!:Date;
year!:string;
month!:string; 
day!:string; 


  ngOnInit(): void {
    this.getCurrentMoonPhase()
  }



  getCurrentMoonPhase() {
    this.rawDate = new Date()

    this.year = this.rawDate.getFullYear().toString();
    this.month = (this.rawDate.getMonth() + 1).toString().padStart(2, '0');
    this.day = this.rawDate.getDate().toString().padStart(2, '0');
    this.currentDate = this.year + "-" + this.month + "-" + this.day

    this.weatherService.getAstronomyInfo("tbilisi", this.currentDate).subscribe({
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
