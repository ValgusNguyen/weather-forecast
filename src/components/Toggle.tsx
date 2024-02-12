import styles from '@/styles/Toggle.module.css';
import { useState } from 'react';

const Toggle = ({
	label,
	toggled,
	onClick,
}: {
	label?: string;
	toggled: boolean;
	onClick: (isToggled: boolean) => void;
}) => {
	return (
		<label className={styles.container}>
			<input
				className={styles.input}
				type="checkbox"
				defaultChecked={toggled}
				onClick={onClick}
			/>
			<span className={styles.span} />
			<strong className={styles.label}>{label}</strong>
		</label>
	);
};

export default Toggle;
