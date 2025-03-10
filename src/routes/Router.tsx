import ErrorPage from '@/routes/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

import { Timer } from '@/components/Timer/Timer'
import { ColorViewerDev } from '@/theme/colors/ColorViewerDev'
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
	{
		path: '/timer',
		element: <Timer />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/ColorViewer',
		element: <ColorViewerDev />,
		errorElement: <ErrorPage />,
	},
])
