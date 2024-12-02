import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from './features/auth/pages/SignIn'
import SignUp from './features/auth/pages/SignUp'
import './index.css'
import Dashboard from './features/dashboard/pages/Dashboard'
import Expenses from './features/dashboard/pages/Expenses'
import Incomes from './features/dashboard/pages/Incomes'
import Products from './features/dashboard/pages/Products'
import NotFoundError from '@/pages/NotFoundError'
const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <NotFoundError safePath="/" />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <NotFoundError safePath="/signup" />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'expenses',
        element: <Expenses />
      },
      {
        path: 'incomes',
        element: <Incomes />
      },
      {
        path: 'products',
        element: <Products />
      }
    ]
  }
])
const root = document.getElementById('root') as HTMLElement
createRoot(root).render(<RouterProvider router={router} />)
