import { env } from '@/config';
import axios from 'axios';

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
