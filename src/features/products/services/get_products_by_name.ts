import { ProductsError } from '@/lib/errorFactory'
import { PRODUCT_ENDPOINTS } from '@/services/endpoints'
import { Product } from 'src/types'

export default async function getProducts(name: string): Promise<Product[]> {
  try {
    const response = await fetch(`${PRODUCT_ENDPOINTS.PRODUCT}/${name}`, {
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
