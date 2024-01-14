'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}></div>
			<div className={styles.rightSide}></div>
		</div>
	);
}
