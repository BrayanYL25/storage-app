import { Label } from '@/components/Label'
import { useDialog } from '../store/dialog'
import { Input } from '@/components/Input'
import { CloseIcon } from '@/components/Icons'

import { DatePicker } from '@/components/DatePicker'
import { FormEvent, useState } from 'react'
import SearchInput from './SearchInput'
import createRecord from '../services/create_record'
import { record_type_id } from 'src/types'
import { format } from 'date-fns'

export default function DialogRecord({
  typeRecord
}: {
  typeRecord: record_type_id
}) {
  const { closeDialog } = useDialog()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [productId, setProductId] = useState<number | undefined>()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const user = JSON.parse(localStorage.getItem('user') as string)
    if (productId !== undefined && user.id !== undefined) {
      createRecord({
        product_id: productId,
        user_id: Number(user.id),
        record_quantity: Number(formData.get('quantity')),
        record_date: format(date?.toString() ?? '', 'yyyy-MM-dd'),
        record_type_id: typeRecord
      })
    }
  }
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-85">
      <form
        className="w-1/2 lg:w-1/3 bg-white p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <section className="flex items-center justify-between">
          <h3 className="text-deep-blue font-bold text-xl mb-4">
            Nuevo Registro
          </h3>

          <button type="button" onClick={closeDialog} aria-label="Cerrar">
            <CloseIcon />
          </button>
        </section>

        <SearchInput setId={setProductId} />

        <Label
          htmlFor="quantity"
          className="text-[#003249] text-base font-semibold"
        >
          Cantidad
        </Label>
        <Input
          placeholder="Escribe..."
          id="quantity"
          name="quantity"
          type="number"
          className="mb-3"
          required
        />

        <Label
          htmlFor="date"
          className="text-[#003249] text-base font-semibold"
        >
          Fecha
        </Label>
        <DatePicker
          value={date}
          onChange={setDate}
          className="w-full"
          id="date"
        />
        <button
          type="submit"
          className="w-full bg-sky-blue mt-6 py-1 px-4 rounded-md text-white font-semibold"
        >
          Registrar Consumo
        </button>
      </form>
    </div>
  )
}
