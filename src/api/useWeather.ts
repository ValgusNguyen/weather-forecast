import { openWeatherFetcher } from '@/utils/axios';
import useSWR from 'swr';

export const useWeather = () => {
	const url = '/weather';

	const { data, error, isLoading } = useSWR(url, openWeatherFetcher);

	return {
		weather: data,
		isError: error,
		isLoading,
	};
};
