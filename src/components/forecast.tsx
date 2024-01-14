import './rightSide.css';

const Forecast = ({ data }: any) => {
	return (
		<>
			<label className="title">Daily forecast</label>
			<div className="daily_forecast">
				<div className="hidden">
					<h3>Today</h3>
					<img className="small-icon" src=""></img>
					<p>Humidity</p>
					<span className="humidity">30%</span>
				</div>
				<div className="hidden">
					<h3>Today</h3>
					<img></img>
					<p>Humidity</p>
					<span className="humidity">30%</span>
				</div>
				<div className="hidden">
					<h3>Today</h3>
					<img></img>
					<p>Humidity</p>
					<span className="humidity">30%</span>
				</div>
				<div className="hidden">
					<h3>Today</h3>
					<img></img>
					<p>Humidity</p>
					<span className="humidity">30%</span>
				</div>
				{/* <span className="humidity">{data.main.humidity}%</span> */}
			</div>
		</>
	);
};

export default Forecast;
