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
    };
    current: {
      temp_c: number;
      humidity: number;
    };
  }
  