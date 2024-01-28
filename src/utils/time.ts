import { DateTime } from 'luxon';

export const getCurrentDate = (timezone: number) => {
	const offset = `UTC${timezone < 0 ? '' : '+'}${timezone / 3600}`;
	const dateTime = DateTime.now().setZone(offset);

	const year = dateTime.year;
	const monthDate = dateTime.toLocaleString({
		weekday: 'short',
		month: 'short',
		day: '2-digit',
	});
	const time = dateTime.toLocaleString(DateTime.TIME_SIMPLE);

	return `${time}, ${monthDate}, ${year}`;
};

export const getDateTimefromUnix = (dt: number) => {
	return DateTime.fromSeconds(dt).toLocaleString(DateTime.DATE_SHORT);
};
