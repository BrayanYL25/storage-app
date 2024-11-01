import ProductsTable from '../../products/components/ProductsTable.tsx'
import useProducts from '../../products/hooks/useProducts.tsx'

export default function Products() {
  const { products } = useProducts()

  return (
    <main className="px-9 pt-6">
      <ProductsTable title="Productos" data={products} />
    </main>
  )
}
