import { WeatherData } from '../types';

const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    if (!API_KEY) {
        throw new Error("API Key is missing. Check your .env file.");
    }

    const url = `${baseURL}/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 400 || response.status === 404) {
            throw new Error("City not found. Please check spelling");
        }
        if (response.status === 401) {
            throw new Error("Invalid API Key. Please check your .env file.");
        }
        throw new Error("Failed to fetch weather data");
    }

    const data: WeatherData = await response.json();
    return data;
}