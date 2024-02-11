import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Location.module.css';
import Toggle from './Toggle';

export const Location = ({
	name,
	country,
}: {
	name: string;
	country: string;
}) => {
	return (
		<div className={styles['location-info']}>
			<FontAwesomeIcon
				className={styles['location-info-icon']}
				icon={faMapPin}
			/>
			<span className={styles['location-info-text']}>
				{`${name}, ${country}`}
			</span>
			<Toggle />
		</div>
	);
};
