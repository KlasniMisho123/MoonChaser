import { Component,  inject,  OnInit } from '@angular/core';
import { GetWeatherService } from '../../Services/get-weather.service';

@Component({
  selector: 'app-moon',
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent implements OnInit{

weatherService = inject(GetWeatherService)

  ngOnInit(): void {
    this.getCurrentMoonPhase()
  }

  getCurrentMoonPhase() {
    getAstrono
  }
}
