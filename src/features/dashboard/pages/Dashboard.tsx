import { Navigate, Outlet } from 'react-router-dom'
import NavigationHeader from '../components/NavigationHeader'
import { Suspense, useEffect, useState } from 'react'
import { AccessDeniedError } from '@/lib/errorFactory'
import { AUTH_ENDPOINTS } from '@/services/endpoints'
import useRecordsStore from '#/records/store/useRecordsStore'

export default function Dashboard() {
  const [isAuthenticated, setAuthentication] = useState(true)
  const [isRefreshed, setRefresh] = useState(false)
  const { fetchRecords } = useRecordsStore()

  useEffect(() => {
    const checkAndRefresh = async () => {
      try {
        const checkResponse = await fetch(AUTH_ENDPOINTS.CHECK, {
          credentials: 'include'
        })

        if (!checkResponse.ok) {
          throw new Error('No tienes accesso a esta rua')
        }
      } catch (e) {
        console.error(e)
        try {
          const refreshResponse = await fetch(AUTH_ENDPOINTS.REFRESH, {
            method: 'POST',
            credentials: 'include'
          })
          if (!refreshResponse.ok) {
            throw new AccessDeniedError('No se puede refrescar el token')
          }

          setRefresh(true)
        } catch (err) {
          console.error(err)
          setAuthentication(false)
        }
      }
    }

    checkAndRefresh()
  }, [])

  useEffect(() => {
    fetchRecords(
      location.pathname === '/dashboard/expenses'
        ? 'expensesEndpoint'
        : 'incomesEndpoint'
    )
  }, [isRefreshed])
  return (
    <>
      {isAuthenticated === false && <Navigate to="/" replace />}
      <Suspense>
        <NavigationHeader />
        <Outlet />
      </Suspense>
    </>
  )
}
