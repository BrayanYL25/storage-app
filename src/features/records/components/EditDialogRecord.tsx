import { DatePicker } from '@/components/DatePicker'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import Overlay from '@/components/Overlay'
import { Toaster } from '@/components/Toaster'
import { Badge } from '@/components/Badge.tsx'
import { FormEvent, useState } from 'react'

const convertDate = (stringDate: string): Date => {
  return new Date(stringDate)
}

interface FormError {
  productError: boolean
  quantityError: boolean
  dateError: boolean
  userError: boolean
}

export default function EditDialogRecord({
  recordId,
  productId,
  unitId,
  productName,
  recordQuantity,
  recordDate
}: {
  recordId: number
  productId: number
  unitId: number
  productName: string
  recordQuantity: number
  recordDate: string
}) {
  const [date, setDate] = useState<Date | undefined>(convertDate(recordDate))
  const [formErrors, setFormErrors] = useState<FormError>({
    productError: false,
    quantityError: false,
    dateError: false,
    userError: false
  })

  const setFieldError = (field: keyof FormError, isError: boolean) => {
    setFormErrors((prevErrors) => ({ ...prevErrors, [field]: isError }))
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(productId, recordId)
    if (Number(formData.get('quantity')) <= 0) {
      console.log('Debe llegar aquí')
      setFieldError('quantityError', true)
    }
  }

  return (
    <>
      <Toaster />
      <Overlay>
        <form
          onSubmit={handleSubmit}
          className="w-1/2 lg:w-1/3 bg-white p-6 rounded-lg"
        >
          <Label htmlFor="product">Producto</Label>
          <Input
            readOnly
            id="product"
            name="product"
            defaultValue={productName}
          />

          <div className="my-2 flex items-center gap-2">
            <Label htmlFor="quantity">Cantidad</Label>
            {formErrors.quantityError && (
              <Badge variant="error">No puede ser 0</Badge>
            )}
          </div>
          <Input
            placeholder="Escribe..."
            id="quantity"
            name="quantity"
            type="number"
            step={unitId === 2 ? '1' : '0.1'}
            className="mb-3"
            defaultValue={recordQuantity}
          />

          <div className="my-2 flex items-center gap-2">
            <Label
              htmlFor="date"
              className="text-[#003249] text-base font-semibold"
            >
              Fecha
            </Label>
            {formErrors.dateError && (
              <Badge variant="error">Seleccionar fecha</Badge>
            )}
          </div>
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
            Editar
          </button>
        </form>
      </Overlay>
    </>
  )
}
