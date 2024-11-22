import { CloseIcon } from '@/components/Icons'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import Overlay from '@/components/Overlay'
import { FormEvent } from 'react'
import { EdittedProduct } from 'src/types'
import updateProduct from '../services/update_product'
import { useToast } from '@/lib/useToast'
import productsStore from '../store/productsStore'

export default function EditProductDialog({
  close,
  product
}: {
  close: () => void
  product: EdittedProduct
}) {
  const { toast } = useToast()
  const { findAll } = productsStore()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('product') as string
    const stock = Number(formData.get('stock') ?? '')
    if (!name || !stock) return

    try {
      await updateProduct({
        id: product.id,
        name: name,
        stock: stock,
        unitId: product.unitId
      })

      toast({
        title: '✅',
        description: `${stock} ${product.unitName} ${name} fueron actualizados`,
        variant: 'success',
        duration: 2000
      })

      await findAll()
      close()
    } catch (e) {
      console.error(e)

      toast({
        title: '❌',
        description: `Ha habido un error`,
        variant: 'error',
        duration: 8000
      })
      close()
    }
  }
  return (
    <>
      <Overlay>
        <form
          className="w-1/2 lg:w-1/3 bg-white p-6 rounded-lg flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <section className="flex items-center justify-between">
            <h3 className="text-deep-blue font-bold text-xl">
              Editar Producto
            </h3>

            <button type="button" aria-label="Cerrar" onClick={close}>
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
              defaultValue={product.name}
              required
            />
          </section>

          <section>
            <Label
              className="text-deep-blue text-base font-semibold"
              htmlFor="unit"
            >
              Unidad de Medida
            </Label>
            <p className="relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-sm outline-none transition sm:text-sm border-gray-300">
              {product.unitName}
            </p>
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
              defaultValue={product.stock}
              required
            />
          </section>

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
