import { useWeather } from '@/api/useWeather';
import { WEATHER_ICON } from '@/constants';
import styles from '@/styles/Weather.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Weather = () => {
	const { weather, isLoading, isError } = useWeather();
	const [dateTime, setDateTime] = useState('');

	// const { timezone } = weather;

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		const currentDate = getCurrentDate(weather.timezone);
	//
	// 		setDateTime(currentDate);
	// 	}, 1000);
	//
	// 	return () => clearInterval(intervalId);
	// }, [timezone]);

	if (isLoading) return 'Loading...';

	const currentWeather = weather?.weather[0];
	const currentWeatherIcon = WEATHER_ICON[currentWeather.icon];

	return (
		<div className={styles.weather}>
			<h3 className={styles['current-date']}>{dateTime}</h3>
			<div className={styles['current-weather']}>
				<FontAwesomeIcon
					className={styles['current-weather-icon']}
					icon={currentWeatherIcon}
				/>
				<h1 className={styles['temperature']}>
					{weather.main.temp}
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
						{weather.main.humidity} %
					</span>
				</div>
				<div className={styles['parameter-row']}>
					<p className={styles['wind-speed']}>Wind Speed</p>
					<span className={styles['wind-value']}>
						{weather.wind.speed} Km/J
					</span>
				</div>
			</div>
		</div>
	);
};

export default Weather;
