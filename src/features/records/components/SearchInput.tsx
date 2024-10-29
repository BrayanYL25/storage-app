import { Label } from '@/components/Label'
import { ChangeEvent, useEffect, useState } from 'react'
import getProducts from '../../products/services/get_products.ts'
import useDebounce from '../hooks/useDebounce.tsx'

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [productList, setProductList] = useState<any>()
  const [focused, setFocused] = useState<boolean>(false)
  const debounceProduct = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (focused && debounceProduct) {
      getProducts(debounceProduct).then((products) => {
        setProductList(
          products
            .map((pro: any) => ({
              id: pro.product_id,
              name: pro.product_name,
              stock: pro.product_stock,
              unit: pro.volume_id
            }))
            .slice(0, 5)
        )
      })
    }
  }, [debounceProduct, focused])

  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const handleSelect = (productName: string) => {
    setSearchTerm(productName)
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
        value={searchTerm}
        onChange={handleTyping}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="rounded-lg border-light-gray"
        required
      />
      {focused && productList?.length > 0 && (
        <div className="absolute overflow-hidden z-10 w-full top-[105%] h-auto bg-white rounded-lg border-[1px] border-light-gray">
          <ul>
            {productList?.map((p: any, index: number) => (
              <li key={index}>
                <button
                  type="button"
                  className="px-2 py-2"
                  onClick={() => handleSelect(p.name)}
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
