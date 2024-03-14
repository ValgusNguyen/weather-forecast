import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons';
import './LeftSide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Time and date
const time = new Date().toLocaleTimeString('en-us', {
	hour: 'numeric',
	minute: 'numeric',
	hour12: true,
});

const date = new Date().toLocaleDateString('en-us', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

const CurrentWeather = ({ data }: any) => {
	return (
		<div className="weather">
			<h3 className="current-date">
				{time} - {date}
			</h3>
			<div className="current-weather">
				<img
					className="weather-icon"
					src= {`/weathericons/${data.weather[0].icon}.png`}
				/>
				<h1 className="temperature">
					{Math.round(data.main.temp)}
					<sup>°F</sup>
				</h1>
			</div>
			<h2 className="weather-des">{data.weather[0].description}</h2>
			<div className="bottom">
				<div className="parameter-row">
					<p className="humidity">Humidity</p>
					<span className="humidity">{data.main.humidity}%</span>
				</div>
				<div className="parameter-row">
					<p className="wind-speed">Wind Speed</p>
					<span className="wind_value">{data.wind.speed}</span>
				</div>
			</div>
		</div>
	);
};
export default CurrentWeather;
