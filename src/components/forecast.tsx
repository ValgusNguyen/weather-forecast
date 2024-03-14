import './rightSide.css';

const Forecast = ({ data }: any) => {
	const List = data.list;
	console.log(List);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const day = new Date();
	let month = months[day.getMonth()];
	let date = `${month} ${day.getDate()}`;
	let date2 = `${month} ${day.getDate() + 1}`;
	let date3 = `${month} ${day.getDate() + 2}`;
	let date4 = `${month} ${day.getDate() + 3}`;
	let date5 = `${month} ${day.getDate() + 4}`;
	return (
		<>
			<div className="daily_forecast">
				<div className="hidden">
					<h3 className='date'>{date}</h3>
					<img
						src={`/weathericons/${List[0].weather[0].icon}.png`}
					/>
					<p>Humidity</p>
					<span className="humidity">{List[0].main.humidity}%</span>
				</div>
				<div className="hidden">
					<h3 className='date'>{date2}</h3>
					<img
						src={`/weathericons/${List[3].weather[0].icon}.png`}
					/>
					<p>Humidity</p>
					<span className="humidity">{List[3].main.humidity}%</span>
				</div>
				<div className="hidden">
					<h3 className='date'>{date3}</h3>
					<img
						src={`/weathericons/${List[6].weather[0].icon}.png`}
					/>
					<p>Humidity</p>
					<span className="humidity">{List[6].main.humidity}%</span>
				</div>
				<div className="hidden">
					<h3 className='date'>{date4}</h3>
					<img
						src={`/weathericons/${List[9].weather[0].icon}.png`}
					/>
					<p>Humidity</p>
					<span className="humidity">{List[9].main.humidity}%</span>
				</div>
				<div className="hidden">
					<h3 className='date'>{date5}</h3>
					<img
						src={`/weathericons/${List[12].weather[0].icon}.png`}
					/>
					<p>Humidity</p>
					<span className="humidity">{List[12].main.humidity}%</span>
				</div>
			</div>
		</>
	);
};

export default Forecast;
