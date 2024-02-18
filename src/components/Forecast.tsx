import TemperatureChart from '@/components/TemperatureChart';
import styles from '@/styles/Forecast.module.css';
import { getDateTimefromUnix } from '@/utils/time';
import ForecastCard from './ForecastCard';

const Forecast = ({ forecast }: { forecast: Record<string, any> }) => {
	const forecastList = forecast.list;
	const forecastByDate = new Map();

	for (const { dt, main, weather } of forecastList) {
		const dateString = getDateTimefromUnix(dt);

		if (!forecastByDate.has(dateString)) {
			forecastByDate.set(dateString, {
				main,
				weather: weather[0],
			});
		}
	}

	return (
		<div className={styles.container}>
			<TemperatureChart chartData={Array.from(forecastByDate)} />
			<div className={styles.detail}>
				{Array.from(forecastByDate).map(
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
	);
};

export default Forecast;
