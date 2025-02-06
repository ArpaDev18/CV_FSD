import styles from './Home.module.scss'
import main from '../../../public/assets/main.png'
import SkillsSection from '../../widgets/SkillsSection/SkillsSection.tsx'
import ServicesSection from '../../widgets/ServicesSection/ServicesSection.tsx'
import OfferingsSection from '../../widgets/OfferingsSection/OfferingsSection.tsx'
import ProjectsSection from '../../widgets/ProjectsSection/ProjectsSection.tsx'
import WorkExperienceSection from '../../widgets/WorkExperienceSection/WorkExperienceSection.tsx'
import EducationLanguagesSection from '../../widgets/EducationLanguagesSection/EducationLanguagesSection.tsx'
import ContactButton from '../../shared/components/ContactButton/ContactButton.tsx'

function Home() {
	return (
		<div id='home'>
			<div style={{ height: '100px' }}></div>
			<section className={styles.mainSection}>
				<div className={styles.content}>
					<div className={styles.text}>
						<h1>Arpine Aleksanian</h1>
						<p>
							Experienced <strong>Frontend Developer</strong> with{' '}
							<strong>6+ years</strong> in web and mobile development.
							Specializing in <strong>React, TypeScript, Next.js</strong>, and
							scalable architectures.
						</p>
						<p>
							Expertise in <strong>UI/UX, performance optimization</strong>, and
							modern frontend technologies. Skilled in{' '}
							<strong>CI/CD, testing, and accessibility</strong>. Focused on
							building efficient and maintainable solutions.
						</p>
						<ContactButton text='Say HI' />
					</div>
					<div className={styles.image}>
						<img src={main} alt='Frontend Skills' />
						<div className={styles.badges}>
							<span className={styles.badge}>HTML/CSS</span>
							<span className={styles.badge}>JavaScript</span>
							<span className={styles.badge}>React/TypeScript</span>
						</div>
					</div>
				</div>
			</section>
			<SkillsSection />
			<ServicesSection />
			<OfferingsSection />
			<ProjectsSection />
			<WorkExperienceSection />
			<EducationLanguagesSection />
		</div>
	)
}

export default Home
