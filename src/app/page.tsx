'use client';
import Image from 'next/image';
import snow from '../assets/snow.jpg';
import sun from '../assets/sun.jpg';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import Forecast from '@/components/forecast';
import { useEffect, useState } from 'react';
import TempChart from '@/components/Chart';
import { GEO_URL, geoApiOptions } from '../app/Api';
import { Chart } from 'chart.js';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState();
	const [forecast, setForecast] = useState();
	const [location, setLocation] = useState('');

	async function getCityName(lat: any, lon: any) {
		try {
			const response = await fetch(
				`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
			);
			const data = await response.json();
			console.log(data);
			let cityName = data.name;
			setLocation(cityName);
		} catch (error) {
			console.error('Can not get location');
		}
	}
	useEffect(() => {
		let watchId: number;
		if (navigator.geolocation) {
			watchId = navigator.geolocation.watchPosition(position => {
				const { latitude, longitude } = position.coords;
				console.log('longitude: ', longitude, 'latitude: ', latitude);
				getCityName(latitude, longitude);
				fetchData(latitude, longitude);
			});
		}
		return () => {
			if (watchId) {
				navigator.geolocation.clearWatch(watchId);
			}
		};
	}, []);
	// useEffect(() => {
	// 	document.body.style = `background-image:  linear-gradient(), url(${toggle ? sun : snow});`
	//    }, [toggle]);
	//    useEffect(() => {
	// 	 const hour = new Date().getHours();
	// 	 const isDay = hour >=6 && hour < 18; 
	// 	 setToggle(isDay);
	//    }, []);
	async function fetchData(lat: any, lon: any) {
		try {
			const response = await fetch(
				`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
			);

			const responseF = await fetch(
				`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
			);

			if (!response.ok && !responseF.ok) {
				throw new Error('Error');
			}
			const data = await response.json();
			const dataF = await responseF.json();
			console.log(data);
			console.log('F', dataF);
			setCurrentWeather(data);
			setForecast(dataF);
		} catch (error) {
			console.error('Can not fetching data: ');
		}
	}

	return (
		<div style={{backgroundImage: 'url($snow)'}}>
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<div className="searchBar">
					<h1>Your City</h1>
					<input
						id="location"
						type="text"
						value={location}
						onChange={input => {
							setLocation(input.target.value);
						}}
						/>
				</div>
				{currentWeather && <CurrentWeather data={currentWeather} />}
			</div>
			<div>
				<div>{forecast && <TempChart data={forecast} />}</div>
				<div>{forecast && <Forecast data={forecast} />}</div>
			</div>
		</div>
	</div>
	);
}
