import Overlay from './Overlay'

export default function OverlayLoader() {
  return (
    <>
      <Overlay>
        <section className="w-1/2 lg:w-1/3 bg-white p-10 rounded-lg flex justify-center items-baseline">
          <p className="text-deep-blue font-bold text-xl">Cargando...</p>
        </section>
      </Overlay>
    </>
  )
}
