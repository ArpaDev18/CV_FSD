import React, { useEffect, useState } from 'react'
import styles from './ContactPopup.module.scss'
import { FaTimes } from 'react-icons/fa'
import Contacts from '../../../widgets/Contacts/Contacts.tsx'
import axios from 'axios'
import Spinner from '../Spinner/Spinner.tsx'
import { TELEGRAM_CHAT_ID, telegramApiUrl } from '../../constants/common.ts'

interface ContactPopupProps {
	isOpen: boolean
	onClose: () => void
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState('')
	const [loading, setLoading] = useState(false)

	const sendMessageToTelegram = async () => {
		if (!message.trim()) {
			setStatus('Please enter a message.')
			return
		}

		try {
			setLoading(true)
			const response = await axios.post(
				telegramApiUrl,
				{
					chat_id: TELEGRAM_CHAT_ID,
					text: `📩 New Contact Message:\n\n${message}`
				},
				{
					headers: { 'Content-Type': 'application/json' }
				}
			)

			if (response.status === 200) {
				setStatus('Message sent successfully!')
				setMessage('')
			} else {
				setStatus('Failed to send message.')
			}
		} catch (error) {
			console.error('Error sending message:', error)
			setStatus('Error sending message.')
		} finally {
			setLoading(false)
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

	const handleTextareaKeyDown = (
		event: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			sendMessageToTelegram()
		}
	}

	if (!isOpen) return null

	return (
		<div className={styles.overlay} onClick={onClose}>
			<Spinner isLoading={loading} />
			<div className={styles.popup} onClick={e => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={onClose}>
					<FaTimes />
				</button>

				<h2>Contact Me</h2>
				<Contacts />

				<textarea
					placeholder='Write your message...'
					className={styles.textarea}
					value={message}
					onChange={e => {
						setStatus('')
						setMessage(e.target.value)
					}}
					onKeyDown={handleTextareaKeyDown}
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
