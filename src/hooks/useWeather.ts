import {useState } from 'react';
import { WeatherData } from '../types/index';
import { fetchWeatherData } from '../services/weatherApi';

export const useWeather = () => {
	const [data, setData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const getWeather = async (location: string) => {
		if (!location) return;

		setLoading(true);
		setError(null);
		setData(null);

		try {
			const result = await fetchWeatherData(location);
			setData(result);
		} catch (err: any) {
			setError(err.message || 'Failed to fetch weather data');
			setData(null);
		} finally {
			setLoading(false);
		}
	};

	return { data, loading, error, getWeather };
}
