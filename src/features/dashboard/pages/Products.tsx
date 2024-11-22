import AddProductButton from '#/products/components/AddProductButton.tsx'
import ProductDialog from '#/products/components/ProductDialog.tsx'
import { useState } from 'react'
import ProductsTable from '../../products/components/ProductsTable.tsx'
import useProducts from '../../products/hooks/useProducts.tsx'
import { Toaster } from '@/components/Toaster.tsx'
import { useToast } from '@/lib/useToast.ts'

export default function Products() {
  const [dialog, setDialog] = useState(false)
  const { toast } = useToast()
  const { products } = useProducts()

  const handleClick = () => {
    setDialog(true)
  }
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
