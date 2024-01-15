'use client';
import { useState } from 'react';
import styles from '../styles/page.module.css';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	return (
		<div className={styles['card-container']}>
			<div className={styles['card-container-left']}></div>
			<div className={styles['card-container-right']}></div>
		</div>
	);
}
