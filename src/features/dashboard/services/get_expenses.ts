import { expensesEndpoint } from '@/services/endpoints'
import { Record } from 'src/types'

export default async function getExpenses() {
  try {
    const response = await fetch(expensesEndpoint, {
      credentials: 'include'
    })

    const records = await response.json()

    return records.map((record: any): Record => {
      return {
        id: record.Id,
        product: record.Producto,
        quantity: record.Cantidad,
        unit: record.Volumen,
        type: record.Tipo,
        email: record.Email,
        date: record.Fecha
      }
    })
  } catch (e) {
    console.error(e)
  }
}
