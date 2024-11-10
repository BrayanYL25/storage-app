import { DatePicker } from '@/components/DatePicker'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import Overlay from '@/components/Overlay'
import { Toaster } from '@/components/Toaster'
import { FormEvent, useState } from 'react'

const convertDate = (stringDate: string): Date => {
  return new Date(stringDate)
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(
      `Codigo de registro: ${recordId}\nCodigo de usuario: ${JSON.parse(localStorage.getItem('user') ?? '').id ?? 0}
      \nCodigo de producto: ${productId}\nProducto: ${formData.get('product')}
      \nCantidad: ${formData.get('quantity')}\n Fecha: ${date?.toISOString()}`
    )
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
          <Input readOnly id="product" name="product" value={productName} />

          <Label htmlFor="quantity">Cantidad</Label>
          <Input
            placeholder="Escribe..."
            id="quantity"
            name="quantity"
            type="number"
            step={unitId === 2 ? '1' : '0.1'}
            className="mb-3"
            required
            value={recordQuantity}
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
        </form>
      </Overlay>
    </>
  )
}
