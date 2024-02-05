'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import Forecast from '@/components/forecast';
import { useEffect, useState } from 'react';
import { GEO_URL, geoApiOptions } from '../app/Api';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();
	// const [lat, setLat] = useState();
	// const [lon, setLon] = useState();
	const [location, setLocation] = useState("");

	async function getCityName (lat:any ,lon: any) {
		try {
			const response = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
			const data = await response.json();
			console.log(data)
			let cityName = data.name;
			setLocation(cityName);
		}
		catch (error) {
			console.error("Can not get location");
		}
	}
	useEffect(() => {
        let watchId: number;
        if (navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // console.log("longitude: ", longitude, "latitude: ", latitude);
                    getCityName(latitude, longitude);
                }
            )
        }
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
	}, []);

	const handleOnSearchChange = async (searchData: any) => {
		const [lat, lon] = searchData.value.split(' ');
		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		);
		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
		);

		const [currentWeatherResponse, forecastResponse] = await Promise.all([
			currentWeatherFetch,
			forecastFetch,
		]);

		const [currentWeatherResult, forecastResult] = await Promise.all([
			currentWeatherResponse.json(),
			forecastResponse.json(),
		]);

		console.log(currentWeatherResult);
		console.log(forecastResult, 'for');

		setCurrentWeather({ city: searchData.label, ...currentWeatherResult });
		setForecast({ city: searchData.label, ...forecastResult });
	};

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				{/* <Search onSearchChange={handleOnSearchChange} /> */}
				<h3>Your city</h3>
				<input id="location" type="text" value={location} onChange={input => { setLocation(input.target.value) }} />
				{/* <Search setCity={location} /> */}
				{currentWeather && <CurrentWeather data={currentWeather} />}
			</div>
			<div className={styles.rightSide}>
				<Forecast data={forecast} />
				{/* {forecast && <Forecast data={forecast} />} */}
			</div>
		</div>
	);
}
