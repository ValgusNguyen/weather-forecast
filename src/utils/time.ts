import { MOBILE_WIDTH } from '@/constants';
import { DateTime } from 'luxon';

export const getCurrentDate = (timezone: number, windowWidth: number) => {
	const offset = `UTC${timezone < 0 ? '' : '+'}${timezone / 3600}`;
	const dateTime = DateTime.now().setZone(offset);

	const time = dateTime.toLocaleString(DateTime.TIME_SIMPLE);
	const monthDate = dateTime.toLocaleString({
		weekday: 'short',
		month: 'short',
		day: '2-digit',
	});

	const year = dateTime.year;

	return `${time}, ${monthDate}, ${year}`;
};

export const getDateTimefromUnix = (dt: number) => {
	return DateTime.fromSeconds(dt).toLocaleString({
		month: 'short',
		day: '2-digit',
	});
};
