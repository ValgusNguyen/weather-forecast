import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
	Colors,
	LineController,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Legend,
} from 'chart.js';

Chart.register(
	Colors,
	LineController,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Legend
);
const TempChart = ({ data }: Record<string, any>) => {
	const labels = [
		data.list[0].dt_txt.slice(11, 16),
		data.list[3].dt_txt.slice(11, 16),
		data.list[6].dt_txt.slice(11, 16),
		data.list[9].dt_txt.slice(11, 16),
		data.list[12].dt_txt.slice(11, 16),
		data.list[15].dt_txt.slice(11, 16),
		data.list[18].dt_txt.slice(11, 16),
	];
	const Chartdata = {
		labels: labels,
		datasets: [
			{
				label: 'Weather Temperature Dataset',
				data: [
					data.list[0].main.temp,
					data.list[3].main.temp,
					data.list[6].main.temp,
					data.list[9].main.temp,
					data.list[12].main.temp,
					data.list[15].main.temp,
					data.list[18].main.temp,
				],
				fill: {
					target: 'origin',
					above: '#64BCF1',
				},
				borderColor: '#FFFFFF',
				pointBorderColor: '#EEB7DB',
				pointBorderWidth: 2,
				borderWidth: 2,
				pointStyle: 'rectRounded',
				pointRadius: 10,
				pointHoverRadius: 15,
				tension: 0.3,
			},
		],
	};
	const options = {
		responsive: true,
		spanGaps: 10,
		maintainAspectRatio: false,
		plugins: {
			legend: false,
		},
		scales: {
			x: {
				grid: { display: false, tickWidth: 1 },
				ticks: {},
				display: false,
				title: {
					display: true,
					text: 'Day',
				},
			},
			y: {
				min: 0,
				max: 80,
				ticks: {
					callback: (value: number) => value + '°C',
				},
				title: {
					display: true,
					text: 'Temperature(°C)',
				},
			},
		},
	};

	return (
		<div className="Chart">
			<div className="third_Container">
				<div className="header_Container">
					<Line data={Chartdata} options={options as never} ></Line>
				</div>
			</div>
		</div>
	);
};
export default TempChart;
