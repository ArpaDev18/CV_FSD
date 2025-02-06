import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './shared/components/Layout/Layout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App
