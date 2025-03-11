import ErrorPage from '@/routes/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

import { App } from '../App'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/error',
		element: <ErrorPage />,
		errorElement: <ErrorPage />,
	},
])
