import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components/Input.tsx'
import { Label } from '@/components/Label.tsx'
import signin from '../services/signin'
import { SignInRequestFailed } from '@/lib/errorFactory'
import { Badge } from '@/components/Badge'

export default function LoginForm() {
  const routeTo = useNavigate()
  const [error, setError] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email') as string
    const password = data.get('password') as string

    try {
      const response = await signin({ email, password })
      localStorage.setItem('user', JSON.stringify(response))
      routeTo('/dashboard/expenses')
    } catch (e: unknown) {
      if (e instanceof SignInRequestFailed) {
        setError(e.message)
      }
    }
  }
  return (
    <form
      className="w-full md:w-1/2 lg:w-[35%] xl:w-[30%] 2xl:w-3/12 3xl:w-2/12 flex flex-col rounded-lg md:border-[1px] border-[#CCDBDC] p-5 px-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[#003249] text-center md:text-left mb-4 text-2xl font-bold">
        Iniciar Sesión
      </h1>

      {error !== '' && <Badge variant="error">{error}</Badge>}

      <Label
        htmlFor="email"
        className="text-[#003249] mt-4 text-lg font-semibold"
      >
        Correo electronico
      </Label>
      <Input
        placeholder="Ingrese su correo"
        id="email"
        name="email"
        type="email"
        className="mb-3"
        required
      />

      <Label
        htmlFor="password"
        className="text-[#003249] text-lg font-semibold"
      >
        Contraseña
      </Label>
      <Input
        placeholder="Ingrese su constraseña"
        type="password"
        name="password"
        id="password"
        className="mb-8"
        required
      />

      <button
        type="submit"
        className="bg-[#007EA7] text-white font-bold rounded-md py-1"
      >
        Iniciar Sesion
      </button>
      <Link
        to="/signup"
        className="text-xs text-center my-1 mb-2 text-[#007EA7] hover:underline"
      >
        ¿No tienes cuenta? Registrate
      </Link>
    </form>
  )
}
