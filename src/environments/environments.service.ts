import dotenv from 'dotenv';

dotenv.config();

const weather_api_key = process.env['WEATHER_API_KEY'];

export const environment = {
  CURRENT_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=`,
  FORECAST_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=`
}