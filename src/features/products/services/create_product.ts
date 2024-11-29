import { ErrorCreatingProduct, UnknownOriginError } from '@/lib/errorFactory'
import { PRODUCT_ENDPOINTS } from '@/services/endpoints'
import { CreateProductRequest } from 'src/types'

export default async function createProduct({
  product
}: {
  product: CreateProductRequest
}) {
  try {
    const response = await fetch(PRODUCT_ENDPOINTS.PRODUCT, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(product)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new ErrorCreatingProduct(
        `Hubo un error creando el producto: ${error.msg}`
      )
    }

    const inserted = await response.json()

    return { newProduct: inserted }
  } catch (e) {
    if (e instanceof ErrorCreatingProduct) {
      console.error(e.message)
      throw e
    } else {
      throw new UnknownOriginError('Error de origen desconocido')
    }
  }
}
