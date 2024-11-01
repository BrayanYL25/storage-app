import { productsEndpoint } from '@/services/endpoints'
import { Product } from '../../../types.d'

export default async function getAllProducts() {
  try {
    const response = await fetch(`${productsEndpoint}`, {
      credentials: 'include'
    })
    const products = await response.json()
    const mappedProducts: Product[] = products.map(
      (product: any): Product => ({
        id: product.productId,
        name: product.productName,
        stock: product.productStock,
        unitId: product.unitId,
        unitName: product.unitName
      })
    )

    return mappedProducts
  } catch (e) {
    console.error(e)
  }
}
