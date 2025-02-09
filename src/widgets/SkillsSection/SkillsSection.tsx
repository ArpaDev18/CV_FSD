import React, { useEffect, useRef, useState } from 'react'
import styles from './SkillsSection.module.scss'
import { SKILLS } from '../../shared/constants/common.ts'

const SkillsSection: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)
	const sliderRef = useRef<HTMLDivElement>(null)

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

	const handleScroll = (direction: 'left' | 'right') => {
		if (sliderRef.current) {
			const scrollAmount = 200
			sliderRef.current.scrollBy({
				left: direction === 'right' ? scrollAmount : -scrollAmount,
				behavior: 'smooth'
			})
		}
	}

	return (
		<section
			ref={sectionRef}
			className={`${styles.skillsSection} ${isVisible ? styles.visible : ''}`}
			id='skills'
		>
			<h2>Skills & Expertise</h2>
			<p>Technologies I work with:</p>

			<div className={styles.skillsContainer}>
				<div className={styles.sliderControls} style={{ display: 'none' }}>
					<button onClick={() => handleScroll('left')}>◀</button>
					<button onClick={() => handleScroll('right')}>▶</button>
				</div>

				<div className={styles.skillsList} ref={sliderRef}>
					{SKILLS.map((skill, index) => (
						<span key={index} className={styles.skillBadge}>
							{skill}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection
