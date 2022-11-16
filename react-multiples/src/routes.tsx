import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/app'
import * as Pages from './pages'

const router = [
  {
    path: '',
    element: <AppLayout />,
    errorElement: <Pages.Error />,
    children: [
      { path: 'home', element: <Pages.Home /> },
      { path: 'about', element: <Pages.About /> },
      { path: 'contact', element: <Pages.Contact /> },
    ],
  },
]

export { router }
