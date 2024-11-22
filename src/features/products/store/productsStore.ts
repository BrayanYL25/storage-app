import { Product, ProductsStore } from 'src/types'
import { create } from 'zustand'
import getAllProducts from '../services/get_all_products'
import { ErrorGettingProducts, UnknownOriginError } from '@/lib/errorFactory'

const productsStore = create<ProductsStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  findAll: async () => {
    set({ loading: true, error: null })
    try {
      const products: Product[] = await getAllProducts()

      set({ products, loading: false })
    } catch (e) {
      if (e instanceof ErrorGettingProducts) {
        set({ error: e.message })
      } else if (e instanceof UnknownOriginError) {
        set({ error: e.message })
      } else {
        console.error(e)
        set({ error: 'Hubo un error irrastreable en el store' })
      }
    }
  }
}))

export default productsStore
