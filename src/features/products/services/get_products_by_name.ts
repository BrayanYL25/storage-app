import { productsByName } from '@/services/endpoints'

export default async function getProducts(name: string) {
  try {
    const response = await fetch(`${productsByName}${name}`, {
      credentials: 'include'
    })
    const products = await response.json()

    return products
  } catch (e) {
    console.error(e)
  }
}
