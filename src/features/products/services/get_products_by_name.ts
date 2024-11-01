import { ProductsError } from '@/lib/errorFactory'
import { productsByName } from '@/services/endpoints'
import { Product } from 'src/types'

export default async function getProducts(name: string): Promise<Product[]> {
  try {
    const response = await fetch(`${productsByName}${name}`, {
      credentials: 'include'
    })

    if (!response.ok) {
      throw new ProductsError('Error: cannot get products')
    }

    const products: Product[] = await response.json()

    return products ?? []
  } catch (e) {
    console.error(e)
    return []
  }
}
