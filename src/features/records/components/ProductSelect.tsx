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
  setId
}: {
  setId: Dispatch<React.SetStateAction<number | undefined>>
}) {
  const [productList, setProductList] = useState<Product[]>()

  useEffect(() => {
    getAllProducts().then(setProductList)
  }, [])

  const handleSelect = (value: string) => {
    setId(Number(value))
  }
  return (
    <div className="mb-3">
      <Label className="text-[#003249] text-base font-semibold">Producto</Label>
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
