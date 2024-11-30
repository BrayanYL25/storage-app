import { PRODUCT_ENDPOINTS } from '@/services/endpoints'
import { Product } from '../../../types.d'
import { ErrorGettingProducts, UnknownOriginError } from '@/lib/errorFactory'

export default async function getAllProducts() {
  try {
    const response = await fetch(PRODUCT_ENDPOINTS.PRODUCT, {
      credentials: 'include'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new ErrorGettingProducts(`Hubo un error ${error.msg}`)
    }
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
    if (e instanceof ErrorGettingProducts) {
      console.error(e.message)
      throw e
    } else {
      console.error(e)
      throw new UnknownOriginError('Hubo un error inesperado')
    }
  }
}
