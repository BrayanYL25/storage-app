import getUnits from '#/units/services/get_units'
import { CloseIcon } from '@/components/Icons'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import Overlay from '@/components/Overlay'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/Select.tsx'
import { Toaster } from '@/components/Toaster'
import React, { Dispatch, FormEvent, useEffect, useState } from 'react'
import { Units } from 'src/types'
import createProduct from '../services/create_product'
import productsStore from '../store/productsStore'

export default function ProductDialog({
  close,
  toast
}: {
  close: Dispatch<React.SetStateAction<boolean>>
  toast: ({ ...props }: any & { id?: string }) => void
}) {
  const [units, setUnits] = useState<Units[]>([])
  const [unitId, setUnitId] = useState<number | undefined>()
  const { findAll } = productsStore()

  useEffect(() => {
    getUnits().then(setUnits)
  }, [])

  const handleSelect = (value: string) => {
    setUnitId(Number(value))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('product') as string
    const stock = Number(form.get('stock'))

    if (name === null || stock === null || unitId === undefined) {
      return
    }

    try {
      await createProduct({
        product: {
          name: name,
          stock: Number(stock),
          unitId: Number(unitId)
        }
      })

      const unitName = units.find((u) => (u.unitId = unitId))

      toast({
        title: '✅',
        description: `${stock} ${unitName?.unitName} ${name} fueron creados`,
        variant: 'success',
        duration: 2000
      })

      await findAll()
      close(false)
    } catch (e) {
      console.error(e)
      toast({
        title: '❌',
        description: `Ha habido un error`,
        variant: 'error',
        duration: 8000
      })
      close(false)
    }
  }
  return (
    <>
      <Toaster />
      <Overlay>
        <form
          className="w-1/2 lg:w-1/3 bg-white p-6 rounded-lg flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <section className="flex items-center justify-between">
            <h3 className="text-deep-blue font-bold text-xl">Nuevo Producto</h3>

            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => close(false)}
            >
              <CloseIcon />
            </button>
          </section>

          <section>
            <Label
              className="text-deep-blue text-base font-semibold"
              htmlFor="product"
            >
              Nombre
            </Label>
            <Input
              type="text"
              placeholder="Ejemplo. Clorox"
              name="product"
              id="product"
              required
            />
          </section>

          <section>
            <Label
              className="text-deep-blue text-base font-semibold"
              htmlFor="product"
            >
              Unidad de Medida
            </Label>

            <Select onValueChange={handleSelect}>
              <SelectTrigger>
                <SelectValue placeholder="e.g. Litro" />
              </SelectTrigger>
              <SelectContent>
                {units.map((unit) => (
                  <SelectItem key={unit.unitId} value={unit.unitId.toString()}>
                    {unit.unitName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>

          <section>
            <Label
              className="text-deep-blue text-base font-semibold"
              htmlFor="stock"
            >
              Stock Actual
            </Label>
            <Input
              type="number"
              placeholder="Ejemplo. 100"
              step="0.1"
              name="stock"
              id="stock"
              required
            />
          </section>

          <button
            type="submit"
            className="w-full bg-sky-blue mt-6 py-1 px-4 rounded-md text-white font-semibold"
          >
            Crear
          </button>
        </form>
      </Overlay>
    </>
  )
}
