const getCoords = async () => {
	const position = (await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	})) as GeolocationPosition;

	return {
		lat: position.coords.latitude,
		long: position.coords.longitude,
	};
};

export const getUserWeather = async () => {
	try {
		const { lat, long } = await getCoords();
		console.log(lat, long);
	} catch (error) {
		throw error;
	}
};
