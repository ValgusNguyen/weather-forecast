import './LeftSide.css';

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

const CurrentWeather = () => {
	return (
		<div className="weather">
			<h3 className="current-date">date</h3>
			<div className="current-weather">
				<image className="weather-icon" />
				<h1 className="temperature">Tem</h1>
			</div>
			<h2 className="weather-des">Cloudy</h2>
			<div className="bottom">
				<p className="humidity">Humidity</p>
				<p className="wind-speed">Wind Speed</p>
			</div>
		</div>
	);
};
export default CurrentWeather;
