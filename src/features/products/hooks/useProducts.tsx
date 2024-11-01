import { useEffect, useState } from 'react'
import getAllProducts from '../services/get_all_products'
import { Product } from 'src/types'

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    getAllProducts().then(setProducts)
  }, [])

  return { products }
}
