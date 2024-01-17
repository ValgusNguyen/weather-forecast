'use client';
import { getUserWeather } from '@/utils/geoLocation';
import { useEffect, useState } from 'react';
import styles from '../styles/page.module.css';

export default function Page() {
	// const [currentWeather, setCurrentWeather] = useState();
	// const [forecast, setForecast] = useState();

	useEffect(() => {
		getUserWeather();
	}, []);

	return (
		<div className={styles['card-container']}>
			<div className={styles['card-container-left']}></div>
			<div className={styles['card-container-right']}></div>
		</div>
	);
}
