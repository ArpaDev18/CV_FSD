import React from 'react'
import styles from './Spinner.module.scss'

const Spinner: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
	if (!isLoading) return null

	return (
		<div className={styles.spinnerContainer}>
			<div className={styles.spinner}></div>
		</div>
	)
}

export default Spinner
