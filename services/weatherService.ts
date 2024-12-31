import axios from "axios";

const API_KEY = process.env.WEATHER_API_KEY; // Store your API key in .env
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
