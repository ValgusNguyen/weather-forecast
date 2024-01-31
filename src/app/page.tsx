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
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const getInitialData = async () => {
			const { currentWeatherData, forecastData } = await getUserWeather();

			setCurrentWeather(currentWeatherData);
			setForecast(forecastData);
			setIsLoading(false);
		};

		getInitialData();
	}, []);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className={styles['card-container']}>
					<Location
						name={currentWeather.name}
						country={currentWeather.sys.country}
					/>
					<WeatherInfo {...{ currentWeather, forecast }} />
				</div>
			)}
		</>
	);
}
