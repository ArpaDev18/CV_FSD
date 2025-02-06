import { FC, useState } from 'react'
import ContactPopup from '../ContactPopup/ContactPopup.tsx'
import styles from './ContactButton.module.scss'

const ContactButton: FC<{ text: string }> = ({ text }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	return (
		<>
			{isPopupOpen && <div className={styles.overlay}></div>}
			<button
				className={styles.contactBtn}
				onClick={() => setIsPopupOpen(true)}
			>
				{text}
			</button>
			<ContactPopup
				isOpen={isPopupOpen}
				onClose={() => setIsPopupOpen(false)}
			/>
		</>
	)
}

export default ContactButton
