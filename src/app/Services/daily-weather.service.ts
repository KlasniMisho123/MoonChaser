import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// API KEY:92c4065289c84a2cb1982555250504
@Injectable({
  providedIn: 'root'
})
export class DailyWeatherService {

  http = inject(HttpClient)

  getDailyWeather():Observable<any> {
    return this.http.get<any>("http://api.weatherapi.com/v1/current.json?key=92c4065289c84a2cb1982555250504&q=London&aqi=no")
  }
}
