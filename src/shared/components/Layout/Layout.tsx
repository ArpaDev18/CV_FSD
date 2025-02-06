import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.tsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer.tsx'

function Layout() {
	return (
		<div className={styles.layout}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
