import GoBack from '@/components/GoBack'
import { useNavigate } from 'react-router-dom'

export default function NotFoundError({ safePath }: { safePath: string }) {
  const routeTo = useNavigate()

  const handleClick = () => {
    routeTo(safePath)
  }
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="w-full md:w-1/2 lg:w-[35%] xl:w-[30%] flex flex-col rounded-lg md:border-[1px] border-[#CCDBDC] p-5">
        <div>
          <GoBack content="Ir al inicio" handleClick={handleClick} />
        </div>
        <div className="my-2 flex flex-col justify-center">
          <h1 className="text-deep-blue text-center mb-4 text-2xl font-bold">
            ¡Ooops!
          </h1>
          <p className="text-deep-blue text-center text-lg font-medium">
            No pudimos hallar la pagina que buscas
          </p>
        </div>
      </section>
    </main>
  )
}
