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
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart width={500} height={100} data={renderData}>
					<Tooltip />
					<Area
						type="monotone"
						dataKey="temp"
						stroke="#00a9ff"
						fill="#89cff3"
						fillOpacity="0.5"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default TemperatureChart;
