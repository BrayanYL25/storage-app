import { LogOutError } from '@/lib/errorFactory'
import { AUTH_ENDPOINTS } from '@/services/endpoints'

export default async function logout() {
  localStorage.removeItem('user')
  const response = await fetch(AUTH_ENDPOINTS.LOGOUT, {
    method: 'POST',
    credentials: 'include'
  })
  const logoutMessage = await response.json()

  if (!response.ok) {
    throw new LogOutError('There was an error login out user')
  }

  return logoutMessage
}
