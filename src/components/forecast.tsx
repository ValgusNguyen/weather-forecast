import './rightSide.css';

const Forecast = ({ data }: any) => {
	const List = data.list
	console.log(List)
	const days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	const d = new Date().getDay();
	console.log(d, 'd');
	let forecastDay = days
		.slice(d, days.length)
		.concat(days.slice(0, days.length));
	console.log(forecastDay, 'day');

	return (
		<>
			<label className="title">Daily forecast</label>
			<div className="daily_forecast">
				{/* {List.splice(0, 7).map((item:any, i:any) => (
					<div key={i} className="hidden">
						<h3>Today</h3>
						<img
							className="small-icon"
							src={item.iconUrl}
						/>
						<p>Humidity</p>
						<span className="humidity">{item.humidity}%</span>
					</div>
				))} */}
				
			</div>
		</>
	);
};

export default Forecast;
