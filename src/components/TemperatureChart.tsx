import styles from '@/styles/TemperatureChart.module.css';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const TemperatureChart = ({ chartData }: { chartData: Array<any> }) => {
	const renderData = chartData.map(
		([date, forecastInfo]: [
			date: string,
			forecastInfo: Record<string, any>,
		]) => {
			const { main } = forecastInfo;

			return { name: date, temp: main.feels_like };
		},
	);

	return (
		<div className={styles.container}>
			<div className={styles.title}>Temperature</div>
			<div className={styles.chart}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={renderData}>
						<Tooltip />
						<Area
							type="monotone"
							dataKey="temp"
							stroke="#006D77"
							fill="#83C5BE"
							fillOpacity="0.5"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TemperatureChart;
