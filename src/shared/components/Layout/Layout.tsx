import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.tsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer.tsx'
import DownloadButton from '../../../widgets/DownloadButton/DownloadButton.tsx'
import { useDeviceType } from '../../hooks/useDeviceType.tsx'

function Layout() {
	const { isMobile } = useDeviceType()

	return (
		<div className={styles.layout}>
			{isMobile ? (
				<div className={styles.mobileContainer}>
					<p>
						Please open on a desktop, as the mobile version is still in
						progress.
					</p>
				</div>
			) : (
				<>
					<DownloadButton />
					<Header />
					<main>
						<Outlet />
					</main>
					<Footer />
				</>
			)}
		</div>
	)
}

export default Layout
