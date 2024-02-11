import Forecast from '@/components/Forecast';
import Weather from '@/components/Weather';
import { MOBILE_WIDTH } from '@/constants';
import styles from '@/styles/WeatherInfo.module.css';
import { useEffect, useState } from 'react';

const WeatherInfo = ({
	currentWeather,
	forecast,
}: {
	currentWeather: Record<string, any>;
	forecast: Record<string, any>;
}) => {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<Weather weatherInfo={currentWeather} />
			</div>
			{windowWidth > MOBILE_WIDTH && <Forecast forecast={forecast} />}
		</div>
	);
};

export default WeatherInfo;
