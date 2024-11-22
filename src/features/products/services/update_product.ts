import { ErrorUpdatingProduct, UnknownOriginError } from '@/lib/errorFactory'
import { PRODUCT_ENDPOINTS } from '@/services/endpoints'
import { UpdateProductRequest } from 'src/types'

export default async function updateProduct(product: UpdateProductRequest) {
  try {
    const response = await fetch(`${PRODUCT_ENDPOINTS.PRODUCT}/${product.id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name: product.name,
        stock: product.stock,
        unitId: product.unitId
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.log(error.msg)
      throw new ErrorUpdatingProduct(`Hubo un error: ${error.msg}`)
    }

    const updated = await response.json()

    console.log(updated)
    return { updated }
  } catch (e) {
    if (e instanceof ErrorUpdatingProduct) {
      console.error(e.message)
      throw e
    } else {
      throw new UnknownOriginError('Hubo un error inesperado')
    }
  }
}
