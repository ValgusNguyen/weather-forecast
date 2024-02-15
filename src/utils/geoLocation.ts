import { DEFAULT_CITY_NAME } from '@/constants';
import { openWeatherAPI } from './axios';

export const getCoords = async () => {
	try {
		const position = (await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		})) as GeolocationPosition;

		return {
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		};
	} catch (error) {
		return undefined;
	}
};

export const getUserWeather = async () => {
	try {
		const coords = await getCoords();

		const params = coords
			? {
					...coords,
					units: 'metric',
				}
			: {
					q: DEFAULT_CITY_NAME,
					units: 'metric',
				};

		const currentWeatherRequest = openWeatherAPI.request({
			method: 'GET',
			url: '/weather',
			params,
		});

		const forecastRequest = openWeatherAPI.request({
			method: 'GET',
			url: '/forecast',
			params,
		});

		const [currentWeatherData, forecastData] = await Promise.all([
			currentWeatherRequest,
			forecastRequest,
		]);

		return { currentWeatherData, forecastData };
	} catch (error) {
		throw error;
	}
};
