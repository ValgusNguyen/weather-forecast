'use client';
import { Location } from '@/components/Location';
import WeatherInfo from '@/components/WeatherInfo';
import styles from '@/styles/page.module.css';
import { getUserWeather } from '@/utils/geoLocation';
import { useEffect, useState } from 'react';

export default function Page() {
	const [currentWeather, setCurrentWeather] = useState<Record<string, any>>(
		{},
	);
	const [forecast, setForecast] = useState<Record<string, any>>({});

	useEffect(() => {
		const getInitialData = async () => {
			const { currentWeatherData, forecastData } = await getUserWeather();

			setCurrentWeather(currentWeatherData);
			setForecast(forecastData);
		};

		getInitialData();
	}, []);

	return Object.keys(currentWeather).length > 0 ? (
		<div className={styles['card-container']}>
			<Location
				name={currentWeather.name}
				country={currentWeather.sys.country}
			/>
			<WeatherInfo {...{ currentWeather, forecast }} />
		</div>
	) : (
		<div>
			Have not fetch the data and have not put a loading there either so
			chill on
		</div>
	);
}
