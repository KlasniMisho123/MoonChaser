
const weather_api_key = '92c4065289c84a2cb1982555250504'
export const environment = {
  CURRENT_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=`,
  FORECAST_WEATHER_API_URL_BASE: `http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=`,
  ASTRONOMY_API_URL_BASE: `http://api.weatherapi.com/v1/astronomy.json?key=${weather_api_key}&q=`
}