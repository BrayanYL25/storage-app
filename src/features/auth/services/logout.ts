import { LogOutError } from '@/lib/errorFactory'
import { logoutEndpoint } from '@/services/endpoints'

export default async function logout() {
  localStorage.removeItem('user')
  const response = await fetch(logoutEndpoint, {
    credentials: 'include'
  })

  if (!response.ok) {
    throw new LogOutError('There was an error login ou')
  }

  return response
}
