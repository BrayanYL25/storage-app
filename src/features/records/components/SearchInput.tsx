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

export default function SearchInput({
  setId
}: {
  setId: Dispatch<React.SetStateAction<number | undefined>>
}) {
  const [productList, setProductList] = useState<Product[]>()

  useEffect(() => {
    getAllProducts().then(setProductList)
  }, [])

  return (
    <>
      <Label>Producto</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {productList?.map((item) => (
            <SelectItem
              key={item.id}
              value={item?.id.toString()}
              onSelect={() => setId(item.id)}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
