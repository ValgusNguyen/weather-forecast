import { WEATHER_ICON } from '@/constants';
import styles from '@/styles/ForecastCard.module.css';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';

const ForecastCard = ({
	date,
	forecastInfo,
}: {
	date: string;
	forecastInfo: Record<string, any>;
}) => {
	const forecastDay =
		DateTime.now().toLocaleString({ month: 'short', day: '2-digit' }) ===
		date
			? 'Today'
			: date;

	const { humidity, weather } = forecastInfo;

	const icon = WEATHER_ICON[weather.icon];

	return (
		<div className={styles.container}>
			<span className={styles.date}>{forecastDay}</span>
			<FontAwesomeIcon className={styles.icon} icon={icon} />
			<div className={styles.metric}>
				<span className={styles.title}>Humidity</span>
				<span className={styles.value}>{humidity} %</span>
			</div>
		</div>
	);
};

export default ForecastCard;
