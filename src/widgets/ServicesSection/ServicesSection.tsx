import React from 'react'
import styles from './ServicesSection.module.scss'
import frontend from '../../../public/assets/services.png'
import { useAppearance } from '../../shared/hooks/useAppearance.tsx'

const ServicesSection: React.FC = () => {
	const { sectionRef, isVisible } = useAppearance()

	return (
		<section
			ref={sectionRef}
			className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}
		>
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>
						Enhancing Digital Experiences with Cutting-Edge Frontend Solutions
					</h2>
					<p>
						I specialize in developing intuitive, high-performance user
						interfaces that enhance digital experiences. From{' '}
						<strong>UI/UX design</strong> to{' '}
						<strong>frontend performance optimization</strong>, I create
						seamless web applications with a focus on{' '}
						<strong>accessibility, responsiveness, and scalability</strong>.
					</p>
				</div>
				<div className={styles.imageContainer}>
					<img src={frontend} alt='Frontend Engineering' />
					<span className={styles.badge}>Frontend Engineering</span>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
