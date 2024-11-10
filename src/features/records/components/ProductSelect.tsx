import { Label } from '@/components/Label'
import { Dispatch, useEffect, useRef, useState } from 'react'
import { Product } from 'src/types'
import getAllProducts from '../../products/services/get_all_products.ts'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/Select.tsx'
import { Badge } from '@/components/Badge.tsx'

export default function ProductSelect({
  setProduct,
  hasError
}: {
  setProduct: Dispatch<React.SetStateAction<Product | undefined>>
  hasError: boolean
}) {
  const [productList, setProductList] = useState<Product[]>()
  const unitName = useRef('')

  useEffect(() => {
    getAllProducts().then(setProductList)
  }, [])

  const handleSelect = (value: string) => {
    const idProduct = Number(value)
    const productSelected = productList?.find(
      (product) => product.id === idProduct
    )
    unitName.current = productSelected!.unitName as string
    setProduct(productSelected)
  }
  return (
    <div className="mb-3">
      <div className="mb-2 flex gap-2">
        <Label className="text-[#003249] text-base font-semibold">
          Producto
        </Label>
        {unitName.current !== '' && (
          <Badge variant="success">{unitName.current}</Badge>
        )}
        {hasError && <Badge variant="error">Selecciona un producto</Badge>}
      </div>
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
