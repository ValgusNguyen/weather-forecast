'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import { useState } from 'react';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	const handleOnSearchChange = async (searchData: any) => {
		const [lat, lon] = searchData.value.split(' ');
		const currentWeatherFetch = fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e',
		);
		// const forecastFetch = fetch(
		// 	`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		//   );
		const forecastFetch = fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e&units=metric',
		);

		const [currentWeatherResponse, forecastResponse] = await Promise.all([
			currentWeatherFetch,
			forecastFetch,
		]);

		const [currentWeatherResult, forecastResult] = await Promise.all([
			currentWeatherResponse.json(),
			forecastResponse.json(),
		]);

		console.log(currentWeatherResult, forecastResult);
		setCurrentWeather({ city: searchData.label, ...currentWeatherResult });
		setCurrentWeather({ city: searchData.label, ...forecastResult });
	};

	return (
		<div className={styles.container}>
			<div>
				<Search onSearchChange={handleOnSearchChange} />
				{currentWeather && <CurrentWeather data={currentWeather} />}
				{/* {forecast && <Forecast data={forecast} />} */}
			</div>
		</div>
	);
}
