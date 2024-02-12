import Forecast from '@/components/Forecast';
import Weather from '@/components/Weather';
import { BREAK_WIDTH } from '@/constants';
import styles from '@/styles/WeatherInfo.module.css';
import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const WeatherInfo = ({
	currentWeather,
	forecast,
	isFlipped,
	windowWidth,
}: {
	currentWeather: Record<string, any>;
	forecast: Record<string, any>;
	isFlipped: boolean;
	windowWidth: number;
}) => {
	return (
		<>
			{windowWidth <= BREAK_WIDTH ? (
				<ReactCardFlip isFlipped={isFlipped}>
					<Weather weatherInfo={currentWeather} />
					<Forecast forecast={forecast} />
				</ReactCardFlip>
			) : (
				<div className={styles.container}>
					<Weather weatherInfo={currentWeather} />
					<Forecast forecast={forecast} />
				</div>
			)}
		</>
	);
};

export default WeatherInfo;
