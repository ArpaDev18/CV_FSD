import React, { useEffect, useState, useRef } from 'react'
import styles from './OfferingsSection.module.scss'

const offerings = [
	{ id: '01', title: 'Frontend Development' },
	{ id: '02', title: 'Performance Optimization' },
	{ id: '03', title: 'Scalable Architecture' },
	{ id: '04', title: 'Micro Frontends' },
	{ id: '05', title: 'Code Quality & Testing' },
	{ id: '06', title: 'CI/CD & Automation' }
]

const OfferingsSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)
	const handleExploreClick = () => {
		const projectsSection = document.getElementById('projects')
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

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
			className={`${styles.offeringsSection} ${isVisible ? styles.visible : ''}`}
		>
			<div className={styles.header}>
				<h2>Discover our offerings</h2>
				<button className={styles.exploreButton} onClick={handleExploreClick}>
					Explore
				</button>
			</div>
			<div className={styles.grid}>
				{offerings.map(offering => (
					<div key={offering.id} className={styles.item}>
						<span className={styles.number}>{offering.id}</span>
						<span className={styles.title}>{offering.title}</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default OfferingsSection
