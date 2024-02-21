import Forecast from '@/components/Forecast';
import Weather from '@/components/Weather';
import { BREAK_WIDTH } from '@/constants';
import styles from '@/styles/WeatherInfo.module.css';
import ReactCardFlip from 'react-card-flip';

const WeatherInfo = ({
	isFlipped,
	windowWidth,
}: {
	isFlipped: boolean;
	windowWidth: number;
}) => {
	return (
		<>
			{windowWidth <= BREAK_WIDTH ? (
				<ReactCardFlip isFlipped={isFlipped}>
					<Weather />
					<Forecast />
				</ReactCardFlip>
			) : (
				<div className={styles.container}>
					<Weather />
					<Forecast />
				</div>
			)}
		</>
	);
};

export default WeatherInfo;
