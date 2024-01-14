'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';
import Forecast from '@/components/forecast';
import { useState } from 'react';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	const handleOnSearchChange = async (searchData: any) => {
		const [lat, lon] = searchData.value.split(' ');
		const currentWeatherFetch = fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e',
		);
		// const currentWeatherFetch = fetch(
		// 	`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		//   );
		// const forecastFetch = fetch(
		// 	`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		//   );
		const forecastFetch = fetch(
			'https://api.openweathermap.org/data/2.5/forecast?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e&units=metric',
		);

		const [currentWeatherResponse, forecastResponse] = await Promise.all([
			currentWeatherFetch,
			forecastFetch,
		]);

		const [currentWeatherResult, forecastResult] = await Promise.all([
			currentWeatherResponse.json(),
			forecastResponse.json(),
		]);

		console.log(currentWeatherResult);
		console.log(forecastResult, 'for');

		setCurrentWeather({ city: searchData.label, ...currentWeatherResult });
		setForecast({ city: searchData.label, ...forecastResult });
	};

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				{/* <Search onSearchChange={handleOnSearchChange} /> */}
				{/* {currentWeather && <CurrentWeather data={currentWeather} />} */}
			</div>
			<div className={styles.rightSide}>
				{/* <Forecast data={forecast} /> */}
				{/* {forecast && <Forecast data={forecast} />} */}
			</div>
		</div>
	);
}
