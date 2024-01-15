import styles from '../styles/page.module.css';

export default function Page() {
	return (
		<div className={styles['card-container']}>
			<div className={styles['card-container-left']}></div>
			<div className={styles['card-container-right']}></div>
		</div>
	);
}
