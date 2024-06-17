import styles from './Loader.module.scss'

export function CustomLoader() {
	return (
		<div className={styles.container}>
			<div className={styles.loading_wave}>
				<div className={styles.loading_bar}></div>
				<div className={styles.loading_bar}></div>
				<div className={styles.loading_bar}></div>
				<div className={styles.loading_bar}></div>
			</div>
		</div>
	)
}
