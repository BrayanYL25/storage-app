import { SignInRequestFailed } from '@/lib/errorFactory.ts'
import { AUTH_ENDPOINTS } from '@/services/endpoints.ts'

export default async function signin({
  email,
  password
}: {
  email: string
  password: string
}) {
  const response = await fetch(AUTH_ENDPOINTS.LOGIN, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ email, password })
  })
  const user = await response.json()

  console.log(user.msg)
  if (!response.ok) {
    throw new SignInRequestFailed(
      user.msg === 'Password wrong'
        ? 'Los datos ingresados son incorrectos.'
        : 'Hubo un error inesperado'
    )
  }

  return user
}
