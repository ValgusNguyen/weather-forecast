'use client';
import { Location } from '@/components/Location';
import WeatherInfo from '@/components/WeatherInfo';
import styles from '@/styles/page.module.css';
import { getUserWeather } from '@/utils/geoLocation';
import { useEffect, useState } from 'react';

export default function Page() {
	const [currentWeather, setCurrentWeather] = useState<Record<string, any>>(
		{},
	);
	const [forecast, setForecast] = useState<Record<string, any>>({});
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isFlipped, setIsFlipped] = useState(false);
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

	useEffect(() => {
		const getInitialData = async () => {
			const { currentWeatherData, forecastData } = await getUserWeather();

			setCurrentWeather(currentWeatherData);
			setForecast(forecastData);
			setIsLoading(false);
		};

		getInitialData();
	}, []);

	const handleFlipToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;

		setIsFlipped(isChecked);
	};

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
						toggleClick={handleFlipToggle}
						windowWidth={windowWidth}
					/>
					<WeatherInfo
						{...{
							currentWeather,
							forecast,
							isFlipped,
							windowWidth,
						}}
					/>
				</div>
			)}
		</>
	);
}
