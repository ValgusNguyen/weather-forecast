'use client';
import { Location } from '@/components/Location';
import { Weather } from '@/components/Weather';
import styles from '@/styles/page.module.css';
import { getUserWeather } from '@/utils/geoLocation';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

	console.log(currentWeather);
	return Object.keys(currentWeather).length > 0 ? (
		<div className={styles['card-container']}>
			<Location
				name={currentWeather.name}
				country={currentWeather.sys.country}
			/>
			<div className={styles['weather-info']}>
				<div className={styles['weather-info-left']}>
					<Weather weatherInfo={currentWeather} />
				</div>
				<div className={styles['weather-info-right']}></div>
			</div>
		</div>
	) : (
		<div>
			Have not fetch the data and have not put a loading there either so
			chill on
		</div>
	);
}
