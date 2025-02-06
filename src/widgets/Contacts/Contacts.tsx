import {
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaPhoneAlt,
	FaTelegramPlane
} from 'react-icons/fa'
import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<>
			<div className={styles.socialIcons}>
				<a
					href='https://t.me/yourtelegram'
					target='_blank'
					rel='noopener noreferrer'
					title='Telegram'
				>
					<FaTelegramPlane />
				</a>
				<a
					href='https://linkedin.com/in/yourlinkedin'
					target='_blank'
					rel='noopener noreferrer'
					title='LinkedIn'
				>
					<FaLinkedin />
				</a>
				<a
					href='https://github.com/yourgithub'
					target='_blank'
					rel='noopener noreferrer'
					title='GitHub'
				>
					<FaGithub />
				</a>
				<a href='mailto:youremail@gmail.com' title='Gmail'>
					<FaEnvelope />
				</a>
				<a href='tel:+1234567890' title='Phone'>
					<FaPhoneAlt />
				</a>
			</div>
		</>
	)
}

export default Contacts
