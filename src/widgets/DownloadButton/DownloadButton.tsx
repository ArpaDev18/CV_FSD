import React, { useState } from 'react'
import styles from './DownloadButton.module.scss'
import { FaDownload } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5' // Новый крестик

const DownloadButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [isClosing, setIsClosing] = useState(false)

	const handleClose = () => {
		setIsClosing(true)
		setTimeout(() => setIsVisible(false), 1000) // Убираем кнопку после анимации
	}

	if (!isVisible) return null

	return (
		<div className={`${styles.container} ${isClosing ? styles.pullUp : ''}`}>
			<div className={styles.rope}></div>

			<div className={styles.buttonWrapper}>
				<a
					href='/Aleksanian_Arpine_CV.pdf'
					download='Arpine_Aleksanian_CV.pdf'
					className={styles.downloadButton}
				>
					<button className={styles.closeButton} onClick={handleClose}>
						<IoCloseSharp />
					</button>
					<FaDownload /> Download PDF
				</a>
			</div>
		</div>
	)
}

export default DownloadButton
