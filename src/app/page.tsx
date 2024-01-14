'use client';
import { useState } from 'react';
import styles from '../styles/page.module.css';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();

	return (
		<div className={styles.card__container}>
			<div className={styles.card__containerLeft}></div>
			<div className={styles.card__containerRight}></div>
		</div>
	);
}
