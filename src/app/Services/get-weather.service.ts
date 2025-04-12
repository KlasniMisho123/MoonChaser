import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SevenDaysForecast, SimpleWeatherResponse } from '../model/interface/weather';
import { environment } from '../../environments/environments.service';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  http = inject(HttpClient)

  getDailyWeather(cityName: string):Observable<SimpleWeatherResponse> {
    return this.http.get<SimpleWeatherResponse>(environment.CURRENT_WEATHER_API_URL_BASE + `${cityName}&aqi=no`)
  }
  
  getWeeklyWeather(cityName: string):Observable<SevenDaysForecast> {
    return this.http.get<SevenDaysForecast>(environment.FORECAST_WEATHER_API_URL_BASE + `${cityName}&days=7&aqi=no&alerts=no`)
  }

  // getAdvancedM

  // https://moon-api.com/

  // MoonChaser - https://astronomyapi.com/dashboard/applications/new
  // Application Id: b3663633-e377-4a80-b5a6-baaf127bc4cf
  // Application Secret: 1699b891eb47587e102690ac74a5ee6328ec747e80917194f5accad0f639a0bec0f6591389a4791ce7fdb30e09488b978c838e4ad4cc5dab79e0f2fa6b1049652ad21488c3353eb9a66dfd5402e680c5e3c847c8f5a33a96ab3bb420deffe00dd23210a232fcf5e71721f332736a4ebd
}
