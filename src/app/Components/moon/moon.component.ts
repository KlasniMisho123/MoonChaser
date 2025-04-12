import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-moon',
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})

export class MoonComponent implements OnInit{


  ngOnInit(): void {
    this.getCurrentMoonPhase()
  }

  getCurrentMoonPhase() {
    console.log("Current MoonPhase")
  }
}
