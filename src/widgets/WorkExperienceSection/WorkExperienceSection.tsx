import React, { useEffect, useRef, useState } from 'react'
import styles from './WorkExperienceSection.module.scss'
import { WORK_EXPERIENCE } from '../../shared/constants/common.ts'

const WorkExperienceSection: React.FC = () => {
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
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			ref={sectionRef}
			className={`${styles.workExperienceSection} ${isVisible ? styles.visible : ''}`}
			id='experience'
		>
			<h2>Work Experience & Projects</h2>
			<div className={styles.experienceList}>
				{WORK_EXPERIENCE.map(job => (
					<div key={job.id} className={styles.experienceCard}>
						<h3>{job.company}</h3>
						<p className={styles.role}>
							<strong>{job.role}</strong> | {job.duration}
						</p>
						<ul className={styles.responsibilities}>
							{job.responsibilities.map((task, index) => (
								<li key={index}>{task}</li>
							))}
						</ul>
						<p className={styles.technologies}>
							<strong>Technologies:</strong> {job.technologies.join(', ')}
						</p>

						<div className={styles.projects}>
							<h4>Key Projects:</h4>
							{job.projects.map((project, idx) => (
								<div
									key={idx}
									className={styles.projectCard}
									id={project.nameId}
								>
									<h5>{project.name}</h5>
									<p>{project.description}</p>
									<p className={styles.projectTech}>
										<strong>Tech Stack:</strong> {project.tech.join(', ')}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default WorkExperienceSection
