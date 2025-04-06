
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