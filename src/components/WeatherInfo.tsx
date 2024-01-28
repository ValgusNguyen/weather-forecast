import Weather from '@/components/Weather';
import styles from '@/styles/WeatherInfo.module.css';
import ForecastCard from './ForecastCard';
import { getDateTimefromUnix } from '@/utils/time';

const WeatherInfo = ({
	currentWeather,
	forecast,
}: {
	currentWeather: Record<string, any>;
	forecast: Record<string, any>;
}) => {
	const forecastList = forecast.list.reduce(
		(dateTimeAccumlator, { dt, weather }) => {
			const dateString = getDateTimefromUnix(dt);

			if (dateTimeAccumlator.has(dateString)) return dateTimeAccumlator;

			dateTimeAccumlator.set(dateString, weather[0]);

			return dateTimeAccumlator;
		},
		new Map(),
	);

	return (
		<div className={styles['weather-info']}>
			<div className={styles['weather-info-left']}>
				<Weather weatherInfo={currentWeather} />
			</div>
			<div className={styles['weather-info-right']}>
				<div className={styles['forecast-chart']}></div>
				<div className={styles['forecast-detail']}>
					{Array.from(forecastList).map(([date, weather]) => {
						return <ForecastCard key={date} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
