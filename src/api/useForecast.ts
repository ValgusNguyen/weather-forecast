import { openWeatherFetcher } from '@/utils/axios';
import useSWR from 'swr';

export const useForecast = () => {
	const url = '/forecast';

	const { data, error, isLoading } = useSWR(url, openWeatherFetcher);

	return {
		forecast: data,
		isError: error,
		isLoading,
	};
};
