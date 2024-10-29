import { Label } from '@/components/Label'
import { useDialog } from '../store/dialog'
import { Input } from '@/components/Input'
import { CloseIcon } from '@/components/Icons'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/Select'
import { DatePicker } from '@/components/DatePicker'
import { FormEvent, useState } from 'react'

export default function DialogRecord() {
  const { closeDialog } = useDialog()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const data = [
    {
      value: 1,
      label: 'Unidad'
    },
    {
      value: 2,
      label: 'Litro'
    },
    {
      value: 3,
      label: 'Kilogramos'
    }
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleTyping = () => {}

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

        <section className="relative flex flex-col">
          <Label
            htmlFor="product"
            className="text-[#003249] text-base font-semibold"
          >
            Producto
          </Label>
          <input
            placeholder="Escribe..."
            id="product"
            name="product"
            type="text"
            onChange={handleTyping}
            required
          />
          <div className="absolute z-10 w-full top-[100%] h-14 bg-white rounded-b-lg border-[1px] border-black"></div>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="quantity"
              className="text-[#003249] text-base font-semibold"
            >
              Unidad de Medida
            </Label>
            <Select>
              <SelectTrigger id="group">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {data.map((item, index) => (
                  <SelectItem key={index} value={item.value.toString()}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
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
          </div>
        </section>

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
