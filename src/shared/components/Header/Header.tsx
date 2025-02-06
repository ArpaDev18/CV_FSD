import React from 'react'
import styles from './Header.module.scss'
import ContactButton from '../ContactButton/ContactButton.tsx'
import { scrollToElement } from '../../utils/scroll.ts'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Frontend Developer CV</div>
			<nav className={styles.nav}>
				<button onClick={() => scrollToElement('home')}>Home</button>
				<button onClick={() => scrollToElement('experience')}>
					Experience
				</button>
				<button onClick={() => scrollToElement('skills')}>Skills</button>
				<button onClick={() => scrollToElement('projects')}>Projects</button>
				<ContactButton text='Contacts' />
			</nav>
		</header>
	)
}

export default Header
