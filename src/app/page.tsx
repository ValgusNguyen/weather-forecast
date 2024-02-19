'use client';
import { Location } from '@/components/Location';
import WeatherInfo from '@/components/WeatherInfo';
import styles from '@/styles/page.module.css';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Page() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	console.log(windowWidth);
	return (
		<div className={styles['card-container']}>
			<Location
				isToggled={isFlipped}
				toggleChange={(event: ChangeEvent<HTMLInputElement>) =>
					setIsFlipped(event.target.checked)
				}
				windowWidth={windowWidth}
			/>
			<WeatherInfo isFlipped={isFlipped} windowWidth={windowWidth} />
		</div>
	);
}
