'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';

export default function Home() {
	const handleOnSearchChange = (searchData: any) => {
		const [lat, lon] = searchData.value.split(' ');
		console.log(searchData, 'searchData');

		// const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
		const currentWeatherFetch = fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e',
		);
		// const forecastFetch = fetch(
		// 	`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		//   );
		const forecastFetch = fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.84117&appid=34fc2decbb2ea488dcbbc7c359a08a0e&units=metric',
		);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then( response => {
				// const weatherResponse = response[0].json();
				// const forcastResponse = response[1].json();
				console.log(response,'aa');

				//   setCurrentWeather({ city: searchData.label, ...weatherResponse });
				//   setForecast({ city: searchData.label, ...forcastResponse });
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div className={styles.container}>
			<div>
				<Search onSearchChange={handleOnSearchChange} />
				{/* <CurrentWeather /> */}
				{/* {forecast && <Forecast data={forecast} />} */}
			</div>
		</div>
	);
}
