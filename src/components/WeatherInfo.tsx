import TemperatureChart from '@/components/TemperatureChart';
import Weather from '@/components/Weather';
import styles from '@/styles/WeatherInfo.module.css';
import { getDateTimefromUnix } from '@/utils/time';
import ForecastCard from './ForecastCard';

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
			{
				dt,
				main,
				weather,
			}: {
				dt: number;
				main: Record<string, any>;
				weather: Record<string, any>;
			},
		) => {
			const dateString = getDateTimefromUnix(dt);

			if (forecastDates.has(dateString)) return forecastDates;

			forecastDates.set(dateString, {
				main,
				weather: weather[0],
			});

			return forecastDates;
		},
		new Map(),
	);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Weather weatherInfo={currentWeather} />
			</div>
			<div className={styles.right}>
				<TemperatureChart chartData={Array.from(forecastList)} />
				<div className={styles.detail}>
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
