'use client';

import { Location } from '@/components/Location';
import WeatherInfo from '@/components/WeatherInfo';
import useDebouncedResize from '@/hooks/useDebounceResize';
import styles from '@/styles/page.module.css';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Page() {
	const [isFlipped, setIsFlipped] = useState(false);
	const windowWidth = useDebouncedResize(200).width;

	return (
		<div className={styles['card-container']}>
			<Location
				isToggled={isFlipped}
				toggleChange={(event: ChangeEvent<HTMLInputElement>) =>
					setIsFlipped(event.target.checked)
				}
				windowWidth={windowWidth}
			/>
			<WeatherInfo isFlipped={isFlipped} windowWidth={windowWidth} />
		</div>
	);
}
