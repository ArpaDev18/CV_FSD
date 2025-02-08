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
					href='https://t.me/AlekSanyan18'
					target='_blank'
					rel='noopener noreferrer'
					title='Telegram'
				>
					<FaTelegramPlane />
				</a>
				<a
					href='https://www.linkedin.com/in/arpine-aleks%D0%B0nian-3716a0307/'
					target='_blank'
					rel='noopener noreferrer'
					title='LinkedIn'
				>
					<FaLinkedin />
				</a>
				<a
					href='https://github.com/ArpaDev18'
					target='_blank'
					rel='noopener noreferrer'
					title='GitHub'
				>
					<FaGithub />
				</a>
				<a href='mailto:aleksanyan180286@gmail.com' title='Gmail'>
					<FaEnvelope />
				</a>
				<a href='tel:+37494677886' title='Phone'>
					<FaPhoneAlt />
				</a>
			</div>
		</>
	)
}

export default Contacts
