import React from 'react'
import styles from './ProjectsSection.module.scss'
import { useAppearance } from '../../shared/hooks/useAppearance.tsx'
import { scrollToElement } from '../../shared/utils/scroll.ts'
import { PROJECTS } from '../../shared/constants/common.ts'

const ProjectsSection: React.FC = () => {
	const { sectionRef, isVisible } = useAppearance()

	return (
		<section
			ref={sectionRef}
			className={`${styles.projectsSection} ${isVisible ? styles.visible : ''}`}
			id='projects'
		>
			<h2>Latest Projects</h2>
			<div className={styles.grid}>
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
				<button
					className={styles.viewAllButton}
					onClick={() => scrollToElement('experience')}
				>
					View all projects
				</button>
			</div>
		</section>
	)
}

export default ProjectsSection
