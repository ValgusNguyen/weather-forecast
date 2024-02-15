'use client';
import { Location } from '@/components/Location';
import WeatherInfo from '@/components/WeatherInfo';
import styles from '@/styles/page.module.css';
import { getUserWeather } from '@/utils/geoLocation';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Page() {
	const [currentWeather, setCurrentWeather] = useState<Record<string, any>>(
		{},
	);
	const [forecast, setForecast] = useState<Record<string, any>>({});
	const [isLoading, setIsLoading] = useState(true);
	const [isFlipped, setIsFlipped] = useState(false);
	const [windowWidth, setWindowWidth] = useState<null | number>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	useEffect(() => {
		const getInitialData = async () => {
			const { currentWeatherData, forecastData } = await getUserWeather();

			setCurrentWeather(currentWeatherData);
			setForecast(forecastData);
			setIsLoading(false);
		};

		getInitialData();
	}, []);

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className={styles['card-container']}>
					<Location
						name={currentWeather.name}
						country={currentWeather.sys.country}
						isToggled={isFlipped}
						toggleClick={(event: ChangeEvent<HTMLInputElement>) =>
							setIsFlipped(event.target.checked)
						}
						windowWidth={windowWidth ?? 0}
					/>
					<WeatherInfo
						{...{
							currentWeather,
							forecast,
							isFlipped,
							windowWidth: windowWidth ?? 0,
						}}
					/>
				</div>
			)}
		</>
	);
}
