import brokers from '../../../public/assets/brockers.png'
import nft from '../../../public/assets/nft.png'
import education from '../../../public/assets/education.png'
import medical from '../../../public/assets/medical.png'
import ecommerce from '../../../public/assets/e-commerce.png'

export const PROJECTS = [
	{
		id: 1,
		title: 'IE based platform for dentists',
		image: brokers,
		name: 'dentists'
	},
	{ id: 2, title: 'NFT Marketplace', image: nft, name: 'nft' },
	{ id: 3, title: 'E-commerce', image: education, name: 'ecommerce' },
	{ id: 4, title: 'Cloud Service', image: medical, name: 'cloud' },
	{ id: 5, title: 'Platform ForBrokers', image: ecommerce, name: 'brokers' }
]

export const WORK_EXPERIENCE = [
	{
		id: 1,
		company: 'Jaxel',
		location: 'Saint Petersburg',
		role: 'Full Stack Developer & Performance Engineer',
		duration: 'May 2021 – Present',
		responsibilities: [
			'Optimized web performance and improved Core Web Vitals.',
			'Developed high-quality, scalable frontend applications using React and Next.js.',
			'Implemented CI/CD pipelines for automated deployment.',
			'Contributed to a well-known sports brand’s SSR project.',
			'Collaborated with marketing and design teams to improve UX/UI.',
			'Implemented React Native features for mobile applications.'
		],
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'Redux',
			'Jest',
			'Storybook',
			'Docker'
		],
		projects: [
			{
				name: 'Famous Sport Brand E-commerce',
				description:
					'Developed features for a high-traffic online store, improving performance and user experience.',
				tech: ['Next.js', 'Redux', 'Storybook', 'Node.js', 'Jest'],
				nameId: 'ecommerce'
			},
			{
				name: 'Platform for Management',
				description:
					'Built a management tool with advanced UI components and accessibility improvements.',
				tech: ['React', 'Redux Saga', 'TypeScript', 'Ant Design']
			},
			{
				name: 'NFT Marketplace',
				description:
					'Developed a comprehensive marketplace for NFTs, enabling users to buy, sell, and trade digital assets with a seamless and intuitive interface.',
				tech: ['Next.js', 'Tailwind', 'React Query', 'TypeScript', 'Web3'],
				nameId: 'nft'
			}
		]
	},
	{
		id: 2,
		company: 'SLICK DEVELOPMENT',
		location: 'USA (Remote)',
		role: 'Frontend Developer',
		duration: 'Feb 2019 – Mar 2021',
		responsibilities: [
			'Built and maintained scalable web applications with React and Redux.',
			'Optimized application performance and resolved bottlenecks.',
			'Led frontend development for a broker platform using Micro Frontend architecture.',
			'Worked with gRPC, Apollo GraphQL, and Docker for seamless integration.',
			'Mentored junior developers and improved team productivity.'
		],
		technologies: [
			'React',
			'Next.js',
			'Redux Toolkit',
			'GraphQL',
			'Docker',
			'Jest',
			'SCSS'
		],
		projects: [
			{
				name: 'Platform for Brokers',
				description:
					'Built a React-based trading platform with real-time updates and performance optimization.',
				tech: [
					'React 18',
					'Redux RTK',
					'TypeScript',
					'Microfrontend',
					'Docker'
				],
				nameId: 'brokers'
			},
			{
				name: 'Platform for Dentists',
				description:
					'Developed a scheduling and management tool with enhanced UI/UX features.',
				tech: ['React 18', 'Redux Toolkit', 'Jest', 'gRPC', 'Ramda'],
				nameId: 'dentists'
			}
		]
	},
	{
		id: 3,
		company: 'Boomerang',
		location: 'Armenia',
		role: 'Frontend Developer',
		duration: 'May 2018 – Feb 2019',
		responsibilities: [
			'Developed customer-facing UI with React and Vue.js.',
			'Enhanced performance and usability for enterprise-level applications.',
			'Worked closely with backend developers to integrate APIs.',
			'Contributed to accessibility improvements and progressive enhancements.'
		],
		technologies: ['React', 'Vue.js', 'SCSS', 'Styled Components', 'WebPack'],
		projects: [
			{
				name: 'Cloud Service Platform',
				description:
					'Developed a cloud-based file management system with React and Apollo GraphQL.',
				tech: ['React', 'Material UI', 'GraphQL', 'Formik'],
				nameId: 'cloud'
			}
		]
	}
]

export const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || ''
export const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || ''
export const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
