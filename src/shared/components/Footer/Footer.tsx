import React from 'react'
import styles from './Footer.module.scss'
import Contacts from '../../../widgets/Contacts/Contacts.tsx'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Contacts />
			</div>
			<p>&copy; 2025 Arpine Aleksanian</p>
		</footer>
	)
}

export default Footer
