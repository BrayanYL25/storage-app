import { Label } from '@/components/Label'
import { ChangeEvent, Dispatch, useEffect, useState } from 'react'
import getProducts from '../../products/services/get_products_by_name.ts'
import useDebounce from '../hooks/useDebounce.tsx'
import { Product } from 'src/types'

export default function SearchInput({
  setId
}: {
  setId: Dispatch<React.SetStateAction<number | undefined>>
}) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [productList, setProductList] = useState<any>()
  const [focused, setFocused] = useState<boolean>(false)
  const debounceProduct = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (focused && debounceProduct) {
      getProducts(debounceProduct).then((products) => {
        setProductList(
          products
            .map(
              (pro: any): Product => ({
                id: pro.product_id,
                name: pro.product_name,
                stock: pro.product_stock,
                unitId: pro.volume_id
              })
            )
            .slice(0, 5)
        )
      })
    }
  }, [debounceProduct, focused])

  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const handleSelect = (productName: string, productId: number) => {
    setSearchTerm(productName)
    setId(productId)
    setFocused(false)
  }
  return (
    <section className="relative flex flex-col mb-3">
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={searchTerm}
        className="rounded-lg border-light-gray"
        required
      />
      {focused && productList?.length > 0 && (
        <div className="absolute overflow-hidden z-10 w-full top-[105%] h-auto bg-white rounded-lg border-[1px] border-light-gray">
          <ul>
            {productList?.map((product: Product, index: number) => (
              <li key={index}>
                <button
                  type="button"
                  className="px-2 py-2"
                  onMouseDown={() =>
                    handleSelect(product.name ?? '', product.id)
                  }
                >
                  {product.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
