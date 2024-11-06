import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { CloseIcon } from '@/components/Icons'
import { DatePicker } from '@/components/DatePicker'
import { useDialog } from '../store/dialog'
import { Dispatch, FormEvent, useState } from 'react'
import ProductSelect from './ProductSelect'
import createRecord from '../services/create_record'
import { Product, RecordEndpoints } from 'src/types'
import { format } from 'date-fns'
import useRecordsStore from '../store/useRecordsStore.ts'
import Overlay from '@/components/Overlay.tsx'
import { Toaster } from '@/components/Toaster.tsx'
import { ToastProps } from '@/components/Toast.tsx'
import { RECORD_ENDPOINTS } from '@/services/endpoints.ts'

interface FormError {
  productError: boolean
  quantityError: boolean
  dateError: boolean
  userError: boolean
}

export default function DialogRecord({
  type,
  setToast
}: {
  type: keyof RecordEndpoints
  setToast: Dispatch<React.SetStateAction<ToastProps | undefined>>
}) {
  const { closeRecordDialog: closeDialog } = useDialog()
  const { fetchRecords } = useRecordsStore()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [product, setProduct] = useState<Product | undefined>()
  const [errors, setErrors] = useState<FormError>({
    productError: false,
    quantityError: false,
    dateError: false,
    userError: false
  })

  const setFieldError = (field: keyof FormError, isError: boolean) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: isError }))
  }

  const validateForm = (user: any, quantity: string | null): boolean => {
    let isValid = true
    if (!product || !product.id) {
      setFieldError('productError', true)
      isValid = false
    }
    if (!user?.id) {
      setFieldError('userError', true)
      isValid = false
    }
    if (!quantity || Number(quantity) === 0 || isNaN(Number(quantity))) {
      setFieldError('quantityError', true)
      isValid = false
    }
    return isValid
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = JSON.parse(localStorage.getItem('user') as string)
    const quantity = formData.get('quantity')?.toString() ?? null

    const canAdd = validateForm(user, quantity)
    if (!canAdd) return

    createRecord(RECORD_ENDPOINTS[type], {
      product_id: product!.id,
      user_id: user.id,
      record_quantity: Number(quantity),
      record_date: format(date ?? new Date(), 'yyyy-MM-dd')
    })
      .then(({ newRecord }) => {
        setToast({
          title: '✅',
          description: `${quantity} ${newRecord.unitName} de ${newRecord.productName} fueron registrados`,
          variant: 'success',
          duration: 2000
        })
      })
      .catch(() => {
        setToast({
          title: '❌',
          description: `Ha habido un error`,
          variant: 'error'
        })
      })

    fetchRecords(type)
    closeDialog()
  }
  return (
    <>
      <Toaster />
      <Overlay>
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

          <ProductSelect
            setProduct={setProduct}
            hasError={errors.productError}
          />

          <Label
            htmlFor="quantity"
            className="text-[#003249] text-base font-semibold mt-3"
          >
            Cantidad
          </Label>
          {errors.quantityError && (
            <span className="w-full px-2 py-1 rounded-md text-[#F95454] font-semibold">
              La cantidad no puede ser 0
            </span>
          )}
          <Input
            placeholder="Escribe..."
            id="quantity"
            name="quantity"
            type="number"
            step={product?.unitId === 2 ? '1' : '0.01'}
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
      </Overlay>
    </>
  )
}
