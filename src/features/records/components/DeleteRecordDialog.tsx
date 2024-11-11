import Overlay from '@/components/Overlay'
import { Dispatch, FormEvent } from 'react'
import { dialog, RecordEndpoints } from 'src/types'
import deleteRecord from '../services/delete_record'
import useRecordsStore from '../store/useRecordsStore'
import { Toaster } from '@/components/Toaster'
import { useToast } from '@/lib/useToast'
import { NullError } from '@/lib/errorFactory'

export default function DeleteRecordDialog({
  id,
  type,
  set
}: {
  id: number | null
  type: keyof RecordEndpoints
  set: Dispatch<React.SetStateAction<dialog>>
}) {
  const { fetchRecords } = useRecordsStore()
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (id === null) {
        throw new NullError('El codigo no puede ser nulo')
      }

      await deleteRecord({ id })
      set({
        id: null,
        isOpen: false
      })

      await fetchRecords(type)
      toast({
        title: 'Info',
        description: 'El registro fue borrado exitosamente',
        variant: 'info',
        duration: 3000
      })
    } catch (e) {
      if (e instanceof NullError) {
        toast({
          title: 'Error',
          description: e.message,
          variant: 'error',
          duration: 3000
        })
      } else {
        toast({
          title: 'Error',
          description: 'Hubo un error desconocido borrando el registro',
          variant: 'error',
          duration: 3000
        })
      }
    }
  }
  return (
    <>
      <Toaster />
      <Overlay>
        <form
          className="w-1/2 lg:w-1/4 bg-white p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <section className="flex items-start justify-between">
            <h3 className="text-deep-blue font-bold text-xl mb-4">
              ¿Desea borrar este registro?
            </h3>
          </section>

          <section className="flex justify-start gap-3">
            <button
              type="button"
              className="border-[1px] border-deep-blue rounded-md px-2 py-1 text-deep-blue hover:text-white hover:bg-deep-blue transition-all duration-150 ease-in-out"
              onClick={() => set((prev) => ({ ...prev, isOpen: false }))}
              aria-label="Cerrar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="border-[1px] border-sky-blue rounded-md px-3 py-1 text-white bg-sky-blue transition-all duration-150 ease-in-out"
              aria-label="Boton borrar registro"
            >
              Borrar
            </button>
          </section>
        </form>
      </Overlay>
    </>
  )
}
