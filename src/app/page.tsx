'use client';
import { Weather } from '@/components/Weather';
import { getUserWeather } from '@/utils/geoLocation';
import { useEffect, useState } from 'react';
import styles from '@/styles/page.module.css';

export default function Page() {
	const [currentWeather, setCurrentWeather] = useState({});
	const [forecast, setForecast] = useState({});

	useEffect(() => {
		const getInitialData = async () => {
			const { currentWeatherData, forecastData } = await getUserWeather();

			setCurrentWeather(currentWeatherData);
			setForecast(forecastData);
		};

		getInitialData();
	}, []);

	return (
		<div className={styles['card-container']}>
			<div className={styles['card-container-left']}>
				{/* <Weather /> */}
			</div>
			<div className={styles['card-container-right']}></div>
		</div>
	);
}
