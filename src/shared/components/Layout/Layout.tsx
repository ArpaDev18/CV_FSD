import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.tsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer.tsx'
import DownloadButton from '../../../widgets/DownloadButton/DownloadButton.tsx'
import { useDeviceType } from '../../hooks/useDeviceType.tsx'

function Layout() {
	const { isDesktop } = useDeviceType()

	return (
		<div
			className={`${styles.layout} ${!isDesktop ? styles.mobilePadding : ''}`}
		>
			<DownloadButton />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
