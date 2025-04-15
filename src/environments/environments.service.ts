import { WEATHER_API_KEY } from "../secrets"

export const environment = {
  CURRENT_WEATHER_API_URL_BASE: `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=`,
  FORECAST_WEATHER_API_URL_BASE: `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=`,
  ASTRONOMY_API_URL_BASE: `https://api.weatherapi.com/v1/astronomy.json?key=${WEATHER_API_KEY}&q=`
}