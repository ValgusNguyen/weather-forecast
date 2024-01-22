import styles from '../styles/Weather.module.css';
import { getCurrentDate } from '@/utils/time';

export const Weather = ({ weather }: Record<string, any>) => {
	const { dt, timezone } = weather;

	const currentDate = getCurrentDate(dt, timezone);

	return (
		<div className={styles.weather}>
			<h3 className={styles['current-date']}>{currentDate}</h3>
			{/* <div className="current-weather"> */}
			{/* 	<Image */}
			{/* 		alt="weather" */}
			{/* 		className="weather-icon" */}
			{/* 		src={`/weathericons/${data.weather[0].icon}.png`} */}
			{/* 	/> */}
			{/* 	<h1 className="temperature"> */}
			{/* 		{Math.round(data.main.temp)} */}
			{/* 		<sup>°F</sup> */}
			{/* 	</h1> */}
			{/* </div> */}
			{/* <h2 className="weather-des">{data.weather[0].description}</h2> */}
			{/* <div className="bottom"> */}
			{/* 	<div className="parameter-row"> */}
			{/* 		<p className="humidity">Humidity</p> */}
			{/* 		<span className="humidity">{data.main.humidity}%</span> */}
			{/* 	</div> */}
			{/* 	<div className="parameter-row"> */}
			{/* 		<p className="wind-speed">Wind Speed</p> */}
			{/* 		<span className="wind_value">{data.wind.speed}</span> */}
			{/* 	</div> */}
			{/* </div> */}
		</div>
	);
};
