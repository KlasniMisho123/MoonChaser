export interface weatherAPIresponse {
    
}
  
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
      wind_kph: number,
      wind_mph: number,
      wind_degree: number,
      wind_dir: string,
      cloud: number,
      feelslike_c: number,
      windchill_c: number
    };
  }
  