export const getDeviceType = () => {
	const width = window.innerWidth

	return {
		isMobile: width <= 768, // Mobile (phones)
		isTablet: width > 768 && width <= 1024, // Tablets
		isDesktop: width > 1024 // Desktops and larger screens
	}
}
