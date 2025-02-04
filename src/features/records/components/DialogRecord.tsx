import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { CloseIcon } from '@/components/Icons'
import { DatePicker } from '@/components/DatePicker'
import { Badge } from '@/components/Badge.tsx'
import { ToastProps } from '@/components/Toast.tsx'
import { Toaster } from '@/components/Toaster.tsx'
import { RECORD_ENDPOINTS } from '@/services/endpoints.ts'
import { useCreateRecordDialog } from '../store/dialog'
import { Dispatch, FormEvent, useState } from 'react'
import ProductSelect from './ProductSelect'
import createRecord from '../services/create_record'
import { Product, TypeRecord } from 'src/types'
import { format } from 'date-fns'
import useRecordsStore from '../store/useRecordsStore.ts'
import FormDialog from '@/components/FormDialog.tsx'

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
  type: TypeRecord
  setToast: Dispatch<React.SetStateAction<ToastProps | undefined>>
}) {
  const { closeRecordDialog: closeDialog } = useCreateRecordDialog()
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const user = JSON.parse(localStorage.getItem('user') as string)
    const quantity = formData.get('quantity')?.toString() ?? null

    const canAdd = validateForm(user, quantity)
    if (!canAdd) return

    try {
      const { newRecord } = await createRecord(RECORD_ENDPOINTS[type], {
        productId: product!.id,
        userId: user.id,
        quantity: Number(quantity),
        date: format(date ?? new Date(), 'yyyy-MM-dd')
      })

      setToast({
        title: '✅',
        description: `${quantity} ${newRecord.unitName} de ${newRecord.productName} fueron registrados`,
        variant: 'success',
        duration: 2000
      })

      fetchRecords(type)
      closeDialog()
    } catch (e) {
      console.error(e)
      setToast({
        title: '❌',
        description: `Ha habido un error`,
        variant: 'error',
        duration: 8000
      })
    }
  }
  return (
    <>
      <Toaster />
      <FormDialog submit={handleSubmit}>
        <section className="flex items-center justify-between">
          <h3 className="text-deep-blue font-bold text-xl mb-4">
            Nuevo Registro
          </h3>

          <button type="button" onClick={closeDialog} aria-label="Cerrar">
            <CloseIcon />
          </button>
        </section>

        <ProductSelect setProduct={setProduct} hasError={errors.productError} />

        <div className="my-2 flex items-center gap-2">
          <Label
            htmlFor="quantity"
            className="text-[#003249] text-base font-semibold"
          >
            Cantidad
          </Label>
          {errors.quantityError && (
            <Badge variant="error">Falta la cantidad</Badge>
          )}
        </div>

        <Input
          placeholder="Escribe..."
          id="quantity"
          name="quantity"
          type="number"
          step={product?.unitId === 2 ? '1' : '0.1'}
          className="mb-3"
        />

        <div className="my-2 flex items-center gap-2">
          <Label
            htmlFor="date"
            className="text-[#003249] text-base font-semibold"
          >
            Fecha
          </Label>
          {errors.quantityError && (
            <Badge variant="error">Seleccionar fecha</Badge>
          )}
        </div>
        <DatePicker
          value={date}
          onChange={setDate}
          className="w-full"
          id="date"
        />

        {errors.dateError && (
          <span className="text-[#F95454] font-semibold">Date error</span>
        )}

        {errors.userError && (
          <span className="text-[#F95454] font-semibold">User Error</span>
        )}
        <button
          type="submit"
          className="w-full bg-sky-blue mt-6 py-1 px-4 rounded-md text-white font-semibold"
        >
          {type === 'OUTCOME' ? 'Registrar Consumo' : 'Registrar Ingreso'}
        </button>
      </FormDialog>
    </>
  )
}
