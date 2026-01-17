export interface WeatherData {
	resolvedAddress: string;
	timezone: string;
	currentConditions: {
		temp: number;
		feelslike: number;
		humidity: number;
		windspeed: number;
		winddir: number;
		uvindex: number;
		conditions: string;
		icon: string;
	}; 
	days: {
		datetime: string;
		temp: number;
		conditions: string;
		hours: {
			datetime: string;
			temp: number;
			icon: string;
		}[];
	}[];
}
