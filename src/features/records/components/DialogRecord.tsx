import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { CloseIcon } from '@/components/Icons'
import { DatePicker } from '@/components/DatePicker'
import { useDialog } from '../store/dialog'
import { FormEvent, useState } from 'react'
import ProductSelect from './ProductSelect'
import createRecord from '../services/create_record'
import { record_type_id } from 'src/types'
import { format } from 'date-fns'
import useRecordsStore from '../store/useRecordsStore.ts'

interface FormError {
  productError: boolean
  quantityError: boolean
  dateError: boolean
  userError: boolean
}

export default function DialogRecord({
  typeRecord
}: {
  typeRecord: record_type_id
}) {
  const { closeDialog } = useDialog()
  const { fetchRecords } = useRecordsStore()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [productId, setProductId] = useState<number | undefined>()
  const [errors, setErrors] = useState<FormError>({
    productError: false,
    quantityError: false,
    dateError: false,
    userError: false
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (!productId) {
      setErrors((prevError) => ({
        productError: true,
        quantityError: prevError.quantityError,
        dateError: prevError.dateError,
        userError: prevError.userError
      }))
      return
    }

    if (!user.id) {
      setErrors((prevError) => ({
        productError: prevError.productError,
        quantityError: prevError.quantityError,
        dateError: prevError.dateError,
        userError: true
      }))
      return
    }

    if (
      Number(formData.get('quantity')) === 0 ||
      isNaN(Number(formData.get('quantity')))
    ) {
      setErrors((prevError) => ({
        productError: prevError.productError,
        quantityError: prevError.quantityError,
        dateError: prevError.dateError,
        userError: true
      }))
      return
    }

    createRecord({
      product_id: productId,
      user_id: Number(user.id),
      record_quantity: Number(formData.get('quantity')),
      record_date: format(date?.toString() ?? '', 'yyyy-MM-dd'),
      record_type_id: typeRecord
    }).then(() => {
      fetchRecords(typeRecord === 2 ? 'expensesEndpoint' : 'incomesEndpoint')
      closeDialog()
    })
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

        <ProductSelect setId={setProductId} />

        {errors.productError && (
          <span className="text-[#F95454] font-semibold">Error</span>
        )}

        <Label
          htmlFor="quantity"
          className="text-[#003249] text-base font-semibold mt-3"
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

        {errors.quantityError && (
          <span className="text-[#F95454] font-semibold">Error</span>
        )}

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

        {errors.dateError && (
          <span className="text-[#F95454] font-semibold">Error</span>
        )}

        {errors.userError && (
          <span className="text-[#F95454] font-semibold">Error</span>
        )}
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
