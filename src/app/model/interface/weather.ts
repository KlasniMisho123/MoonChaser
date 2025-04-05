export interface weatherAPIresponse {
    
}

// export interface SimpleWeatherResponse {
//     city: string;
//     country: string;
//     temperature: number;
//     condition: string;
//     icon: string;
// }
  
export interface SimpleWeatherResponse {
    location: {
      name: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: number;
      humidity: number;
      condition: {
         text: string,
         icon: string,
      },
      cloud: number,
      feelslike_c: number,
      windchill_c: number
    };
  }
  