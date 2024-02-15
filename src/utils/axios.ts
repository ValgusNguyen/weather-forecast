import { env } from '@/config';
import { DEFAULT_CITY_NAME } from '@/constants';
import axios, { AxiosRequestConfig } from 'axios';
import { getCoords } from './geoLocation';

export const openWeatherAPI = axios.create({
	baseURL: env.OPEN_WEATHER_API_URL,
	params: {
		appid: env.OPEN_WEATHER_API_KEY,
	},
});

openWeatherAPI.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	},
);

export const openWeatherFetcher = async (url: string) => {
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

	return openWeatherAPI.request({
		method: 'GET',
		url,
		params,
	});
};

export const geoDBAPI = axios.create({
	baseURL: env.GEO_API_URL,
	headers: {
		'X-RapidAPI-Key': env.GEO_API_KEY,
		'X-RapidAPI-Host': env.GEO_API_HOST,
	},
});

geoDBAPI.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	},
);
