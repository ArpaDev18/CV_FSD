import React, { useEffect, useRef, useState } from 'react'
import styles from './ProjectsSection.module.scss'
import { scrollToElement } from '../../shared/utils/scroll.ts'
import { PROJECTS } from '../../shared/constants/common.ts'

const ProjectsSection: React.FC = () => {
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

	return (
		<section
			ref={sectionRef}
			className={`${styles.projectsSection} ${isVisible ? styles.visible : ''}`}
			id='projects'
		>
			<h2>Latest Projects</h2>

			<div className={styles.projectsContainer}>
				<div className={styles.grid} ref={sliderRef}>
					{PROJECTS.map(project => (
						<div
							key={project.id}
							className={styles.projectCard}
							onClick={() => scrollToElement(project.name)}
						>
							<img src={project.image} alt={project.title} />
							<div className={styles.overlay}>
								<h3>{project.title}</h3>
							</div>
						</div>
					))}
				</div>
			</div>

			<button
				className={styles.viewAllButton}
				onClick={() => scrollToElement('experience')}
			>
				View all projects
			</button>
		</section>
	)
}

export default ProjectsSection
