import { WEATHER_ICON } from '@/constants';
import styles from '@/styles/Weather.module.css';
import { getCurrentDate } from '@/utils/time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export const Weather = ({ weatherInfo }: Record<string, any>) => {
	const { timezone } = weatherInfo;
	const currentWeather = weatherInfo.weather[0];
	const currentWeatherIcon = WEATHER_ICON[currentWeather.icon];

	const [dateTime, setDateTime] = useState<string>(getCurrentDate(timezone));

	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentDate = getCurrentDate(timezone);

			setDateTime(currentDate);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [timezone]);

	return (
		<div className={styles.weather}>
			<h3 className={styles['current-date']}>{dateTime}</h3>
			<div className={styles['current-weather']}>
				<FontAwesomeIcon
					className={styles['current-weather-icon']}
					icon={currentWeatherIcon}
				/>
				<h1 className={styles['temperature']}>
					{weatherInfo.main.temp}
					<span className={styles['temperature-icon']}>°C</span>
				</h1>
			</div>
			<h2 className={styles['weather-description']}>
				{currentWeather.description}
			</h2>
			<div className={styles['bottom']}>
				<div className={styles['parameter-row']}>
					<p className={styles['humidity']}>Humidity</p>
					<span className={styles['humidity-value']}>
						{weatherInfo.main.humidity} %
					</span>
				</div>
				<div className={styles['parameter-row']}>
					<p className={styles['wind-speed']}>Wind Speed</p>
					<span className={styles['wind-value']}>
						{weatherInfo.wind.speed} Km/J
					</span>
				</div>
			</div>
		</div>
	);
};
