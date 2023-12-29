'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Search from '../components/SearchBar';
import CurrentWeather from '@/components/Weather';

export default function Home() {
	const handleOnSearchChange = (searchData: any) => {
		console.log(searchData);
	};

	return (
		<div className={styles.container}>
			<div>
			<Search onSearchChange={handleOnSearchChange} />
			<CurrentWeather />
			</div>
		</div>
	);
}
