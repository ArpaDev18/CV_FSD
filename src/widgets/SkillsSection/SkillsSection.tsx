import React, { useEffect, useRef, useState } from 'react'
import styles from './SkillsSection.module.scss'

const skills = [
	'React.js',
	'Next.js',
	'Stencil.js',
	'GraphQL/Apollo',
	'Node.js',
	'CRM',
	'JEST',
	'GIT',
	'FSD',
	'WEB CORE VITALS'
]

const SkillsSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.6 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			ref={sectionRef}
			className={`${styles.skillsSection} ${isVisible ? styles.visible : ''}`}
			id='skills'
		>
			<h2>Skills & Expertise</h2>
			<p>Technologies I work with:</p>
			<div className={styles.skillsList}>
				{skills.map((skill, index) => (
					<span key={index} className={styles.skillBadge}>
						{skill}
					</span>
				))}
			</div>
		</section>
	)
}

export default SkillsSection
