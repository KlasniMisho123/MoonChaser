
export interface SimpleWeatherResponse {
    location: {
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: number;
      temp_f: number,
      humidity: number;
      condition: {
         text: string,
         icon: string,
      },
      precip_mm: number,
      precip_in: number,
      wind_kph: number,
      wind_mph: number,
      wind_degree: number,
      wind_dir: string,
      cloud: number,
      feelslike_c: number,
      windchill_c: number
    };
  }
  
  export interface SevenDaysForecast extends SimpleWeatherResponse {
    forecast: {
      forecastday: [
        {
          date: string;
          day: {
            maxtemp_c: number;
            maxtemp_f: number;
            mintemp_c: number;
            mintemp_f: number;
            temp_c: number;
            temp_f: number;
            humidity: number;
            condition: {
              text: string;
              icon: string;
            };
            precip_mm: number;
            precip_in: number;
            wind_kph: number;
            wind_mph: number;
            wind_degree: number;
            wind_dir: string;
            cloud: number;
            feelslike_c: number;
            windchill_c: number;
          };
        }
      ];
    };
  }
export interface TargetedWeekDay {
  icon: string;
  date:string;
  avgtemp_c: number;
  avgtemp_f: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avghumidity: number;
  maxwind_kph: number;
  maxwind_mph: number;
  text: string;
}


export interface MoonPhase {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}
