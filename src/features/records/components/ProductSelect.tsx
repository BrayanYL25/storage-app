import { Label } from '@/components/Label'
import { Dispatch, useEffect, useState } from 'react'
import { Product } from 'src/types'
import getAllProducts from '../../products/services/get_all_products.ts'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/Select.tsx'

export default function ProductSelect({
  setProduct,
  hasError
}: {
  setProduct: Dispatch<React.SetStateAction<Product | undefined>>
  hasError: boolean
}) {
  const [productList, setProductList] = useState<Product[]>()

  useEffect(() => {
    getAllProducts().then(setProductList)
  }, [])

  const handleSelect = (value: string) => {
    const idProduct = Number(value)
    const productSelected = productList?.find(
      (product) => product.id === idProduct
    )
    setProduct(productSelected)
  }
  return (
    <div className="mb-3">
      <Label className="text-[#003249] text-base font-semibold">Producto</Label>
      {hasError && (
        <span className="w-full px-2 py-1 rounded-md text-[#F95454] font-semibold">
          Error: Debes seleccionar un producto
        </span>
      )}
      <Select onValueChange={handleSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {productList?.map((item) => (
            <SelectItem key={item.id} value={item?.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
