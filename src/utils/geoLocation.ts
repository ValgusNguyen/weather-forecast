import { openWeatherAPI } from './axios';

const getCoords = async () => {
	const position = (await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	})) as GeolocationPosition;

	return {
		lat: position.coords.latitude,
		lon: position.coords.longitude,
	};
};

export const getUserWeather = async () => {
	try {
		const { lat, lon } = await getCoords();

		const currentWeatherRequest = openWeatherAPI.request({
			method: 'GET',
			url: '/weather',
			params: {
				lat,
				lon,
				units: 'metric',
			},
		});

		const forecastRequest = openWeatherAPI.request({
			method: 'GET',
			url: '/forecast',
			params: {
				lat,
				lon,
			},
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
