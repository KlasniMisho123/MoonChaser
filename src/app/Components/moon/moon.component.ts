import { Component,  inject,  OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-moon',
  imports: [DatePipe],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent implements OnInit{

weatherService = inject(GetWeatherService)

currentMoonPhase: string = "";

currentDate:string= ""
rawDate:Date=

  ngOnInit(): void {
    this.getCurrentMoonPhase()
  }

  getCurrentMoonPhase() {
    this.rawDate = new Date()

    console.log("currentDate: ", this.currentDate | DatePipe)
    this.weatherService.getAstronomyInfo("tbilisi","2025-04-12").subscribe({
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
