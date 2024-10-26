import { Link } from 'react-router-dom'

export default function Redirect() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center flex-col gap-9">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#003249] to-[#80CED7] via-[#007EA7] text-transparent bg-clip-text leading-normal drop-shadow-[0_0px_50px_rgb(154,209,212)]">
          GESTIONA TU INVENTARIO
        </h1>
        <div className="flex items-center gap-6">
          <Link
            to="/signup"
            className="bg-[#007EA7] text-[#FFFFFF] font-medium text-base rounded-lg px-6 py-3"
          >
            Registrarse
          </Link>
          <Link
            to="/signin"
            className="border-[1px] border-[#007EA7] text-[#007EA7] hover:bg-[#007EA7] hover:text-[#FFFFFF] transition-all font-medium text-base rounded-lg px-4 py-2"
          >
            Iniciar Sesión
          </Link>
        </div>
      </main>
    </>
  )
}
