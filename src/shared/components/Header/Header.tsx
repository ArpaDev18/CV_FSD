import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import ContactButton from '../ContactButton/ContactButton.tsx'
import { scrollToElement } from '../../utils/scroll.ts'

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = (event: React.MouseEvent) => {
		event.stopPropagation()
		setIsMenuOpen(prev => !prev)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (
				!target.closest(`.${styles.nav}`) &&
				!target.closest(`.${styles.burger}`)
			) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Frontend Developer CV</div>
			<div
				className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<nav
				className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={() => {
						scrollToElement('home')
						setIsMenuOpen(false)
					}}
				>
					Home
				</button>
				<button
					onClick={() => {
						scrollToElement('experience')
						setIsMenuOpen(false)
					}}
				>
					Experience
				</button>
				<button
					onClick={() => {
						scrollToElement('skills')
						setIsMenuOpen(false)
					}}
				>
					Skills
				</button>
				<button
					onClick={() => {
						scrollToElement('projects')
						setIsMenuOpen(false)
					}}
				>
					Projects
				</button>
				<ContactButton text='Contacts' />
			</nav>
		</header>
	)
}

export default Header
