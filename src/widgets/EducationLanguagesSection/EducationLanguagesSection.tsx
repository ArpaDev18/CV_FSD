import React, { useEffect, useState, useRef } from 'react'
import styles from './EducationLanguagesSection.module.scss'

const education = [
	{
		id: 1,
		institution: 'National Polytechnic University of Armenia',
		degree: 'Bachelor of Information Technology',
		duration: '2014 – 2018'
	}
]

const languages = [
	{ id: 1, name: 'Armenian', level: 'Native' },
	{ id: 2, name: 'English', level: 'B2+' },
	{ id: 3, name: 'Russian', level: 'Fluent' }
]

const EducationLanguagesSection: React.FC = () => {
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
			{ threshold: 0.3 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			ref={sectionRef}
			className={`${styles.educationLanguagesSection} ${isVisible ? styles.visible : ''}`}
			id='education'
		>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h2>Education & Languages</h2>
				<div className={styles.grid}>
					<div className={styles.education}>
						<h3>Education</h3>
						{education.map(edu => (
							<div key={edu.id} className={styles.educationCard}>
								<h4>{edu.institution}</h4>
								<p>{edu.degree}</p>
								<p className={styles.duration}>{edu.duration}</p>
							</div>
						))}
					</div>

					<div className={styles.languages}>
						<h3>Languages</h3>
						<ul>
							{languages.map(lang => (
								<li key={lang.id}>
									<span className={styles.languageName}>{lang.name}:</span>{' '}
									{lang.level}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EducationLanguagesSection
