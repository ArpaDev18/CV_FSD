import React, { useEffect, useState } from 'react'
import styles from './ContactPopup.module.scss'
import { FaTimes } from 'react-icons/fa'
import Contacts from '../Contacts/Contacts.tsx'

interface ContactPopupProps {
	isOpen: boolean
	onClose: () => void
}

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || ''
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || ''

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState('')
	console.log(TELEGRAM_BOT_TOKEN, 'TELEGRAM_BOT_TOKEN')
	console.log('hvghtffh')

	const sendMessageToTelegram = async () => {
		if (!message.trim()) {
			setStatus('Please enter a message.')
			return
		}

		const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

		const response = await fetch(telegramApiUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				text: `📩 New Contact Message:\n\n${message}`
			})
		})

		if (response.ok) {
			setStatus('Message sent successfully!')
			setMessage('')
		} else {
			setStatus('Failed to send message.')
		}
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [onClose])

	if (!isOpen) return null

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.popup} onClick={e => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={onClose}>
					<FaTimes />
				</button>

				<h2>Contact Us</h2>
				<Contacts />

				<textarea
					placeholder='Write your message...'
					className={styles.textarea}
					value={message}
					onChange={e => setMessage(e.target.value)}
				></textarea>

				<button className={styles.sendButton} onClick={sendMessageToTelegram}>
					Send Message
				</button>
				{status && <p className={styles.status}>{status}</p>}
			</div>
		</div>
	)
}

export default ContactPopup
