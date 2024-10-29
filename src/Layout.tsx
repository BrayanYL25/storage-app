import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Redirect from './features/redirect/pages/Redirect'
import SignIn from './features/auth/pages/SignIn'
import SignUp from './features/auth/pages/SignUp'
import './index.css'
import Dashboard from './features/dashboard/pages/Dashboard'
import Expenses from './features/dashboard/pages/Expenses'
import Incomes from './features/dashboard/pages/Incomes'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
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
      }
    ]
  }
])
const root = document.getElementById('root') as HTMLElement
createRoot(root).render(<RouterProvider router={router} />)
