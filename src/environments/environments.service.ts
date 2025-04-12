// import dotenv from 'dotenv';

// dotenv.config();

// const weather_api_key = process.env['WEATHER_API_KEY'];
const weather_api_key = '92c4065289c84a2cb1982555250504'
export const environment = {
  // CURRENT_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=`,
  // FORECAST_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=`
  CURRENT_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=`,
  FORECAST_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=`
}