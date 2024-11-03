import { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'

export default function SignUp() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    console.log(data.get('email'))
  }
  return (
    <main className="min-h-screen flex justify-center items-center">
      <form
        className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] flex flex-col rounded-lg md:border-[1px] border-[#CCDBDC] p-5 px-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[#003249] text-center md:text-left text-2xl mb-8 font-bold">
          Registrarse
        </h1>

        <Label htmlFor="name" className="text-[#003249] text-lg font-semibold">
          Nombre
        </Label>
        <Input
          placeholder="Ingrese su correo"
          id="name"
          name="name"
          type="text"
          className="mb-3"
          required
        />

        <Label htmlFor="email" className="text-[#003249] text-lg font-semibold">
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
          Enviar
        </button>
        <Link
          to="/"
          className="text-xs text-center my-1 mb-2 text-[#007EA7] hover:underline"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </form>
    </main>
  )
}
