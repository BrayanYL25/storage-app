import AddProductButton from '#/products/components/AddProductButton.tsx'
import ProductDialog from '#/products/components/ProductDialog.tsx'
import { useEffect, useState } from 'react'
import ProductsTable from '../../products/components/ProductsTable.tsx'
import { Toaster } from '@/components/Toaster.tsx'
import { useToast } from '@/lib/useToast.ts'
import productsStore from '#/products/store/productsStore.ts'

export default function Products() {
  const [dialog, setDialog] = useState(false)
  const { toast } = useToast()
  const { products, findAll } = productsStore()

  const handleClick = () => {
    setDialog(true)
  }

  useEffect(() => {
    findAll()
  }, [])
  return (
    <>
      <main className="col-start-4 col-span-9 overflow-y-scroll px-9 pt-6">
        <Toaster />
        {dialog && <ProductDialog close={setDialog} toast={toast} />}
        <AddProductButton click={handleClick} />
        <ProductsTable title="Productos" data={products} />
      </main>
    </>
  )
}
