'use client';
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

	return (
		<div className={styles['card-container']}>
			<div className={styles['location-info']}>
				<FontAwesomeIcon
					className={styles['location-info-icon']}
					icon={faMapPin}
				/>
				<span className={styles['location-info-text']}>
					{`${currentWeather.name}, ${currentWeather.sys.country}`}
				</span>
			</div>
			<div className={styles['weather-info']}>
				<div className={styles['weather-info-left']}>
					{Object.keys(currentWeather).length ? (
						<Weather weatherInfo={currentWeather} />
					) : (
						<div>No current weather</div>
					)}
				</div>
				<div className={styles['weather-info-right']}></div>
			</div>
		</div>
	);
}
