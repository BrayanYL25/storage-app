import { Navigate, Outlet } from 'react-router-dom'
import NavigationHeader from '../components/NavigationHeader'
import { Suspense, useEffect, useState } from 'react'
import { AccessDenied } from '@/lib/errorFactory'
import { checkPermission } from '@/services/endpoints'

export default function Dashboard() {
  const [isAuthenticated, setAuthentication] = useState(true)

  useEffect(() => {
    fetch(checkPermission, {
      credentials: 'include'
    })
      .then((response) => {
        if (!response.ok) {
          throw new AccessDenied('Access denied for this route')
        }
      })
      .catch((e) => {
        if (e instanceof AccessDenied) {
          setAuthentication(false)
        }
      })
  }, [])
  return (
    <>
      {isAuthenticated === false && <Navigate to="/signin" replace />}
      <Suspense>
        <NavigationHeader />
        <Outlet />
      </Suspense>
    </>
  )
}
