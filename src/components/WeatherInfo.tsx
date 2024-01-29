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
	const forecastList: Map<string, any> = forecast.list.reduce(
		(
			forecastDates: Map<string, any>,
			{ dt, main, weather }: { dt: number; weather: Record<string, any> },
		) => {
			const dateString = getDateTimefromUnix(dt);

			if (forecastDates.has(dateString)) return forecastDates;

			forecastDates.set(dateString, {
				humidity: main.humidity,
				weather: weather[0],
			});

			return forecastDates;
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
					{Array.from(forecastList).map(
						([date, weather]: [
							date: string,
							weather: Record<string, any>,
						]) => {
							return (
								<ForecastCard
									key={date}
									date={date}
									forecastInfo={weather}
								/>
							);
						},
					)}
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
