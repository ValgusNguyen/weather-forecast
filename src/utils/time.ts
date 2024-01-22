import { DateTime } from 'luxon';

export const getCurrentDate = (dt: number, timezone: number) => {
	const offset = `UTC${timezone < 0 ? '' : '+'}${timezone / 3600}`;
	const luxonDate = DateTime.fromSeconds(dt, { zone: offset });

	const dateTime = luxonDate.toLocal();

	const year = dateTime.year;
	const monthDate = dateTime.toLocaleString({
		weekday: 'short',
		month: 'short',
		day: '2-digit',
	});
	const time = dateTime.toLocaleString(DateTime.TIME_SIMPLE);

	return `${time}, ${monthDate}, ${year}`;
};
