import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleWeatherResponse } from '../model/interface/weather';
import { environment } from '../../environments/environments.service';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  http = inject(HttpClient)

  getDailyWeather(cityName: string):Observable<SimpleWeatherResponse> {
    return this.http.get<SimpleWeatherResponse>(environment.CURRENT_WEATHER_API_URL_BASE + `${cityName}&aqi=no`)
  }
  
  getWeeklyWeather(cityName: string):Observable<any> {
    return this.http.get<any>(environment.FORECAST_WEATHER_API_URL_BASE + `${cityName}&days=7&aqi=no&alerts=no`)
  }
  // Weekly API RESPONSE MODEL
}
