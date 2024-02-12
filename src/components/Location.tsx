import Toggle from '@/components/Toggle';
import { BREAK_WIDTH } from '@/constants';
import styles from '@/styles/Location.module.css';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Location = ({
	name,
	country,
	isToggled,
	toggleClick,
	windowWidth,
}: {
	name: string;
	country: string;
	isToggled: boolean;
	toggleClick: (isToggle) => void;
	windowWidth: number;
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.location}>
				<FontAwesomeIcon className={styles.icon} icon={faMapPin} />
				<span className={styles.text}>{`${name}, ${country}`}</span>
			</div>
			{windowWidth <= BREAK_WIDTH && (
				<Toggle
					className={styles.switch}
					toggled={isToggled}
					onClick={toggleClick}
				/>
			)}
		</div>
	);
};
