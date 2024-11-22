import { ErrorGettingRecords } from '@/lib/errorFactory'
import { Record } from 'src/types'

export default async function getRecords({ endpoint }: { endpoint: string }) {
  try {
    const response = await fetch(endpoint, {
      credentials: 'include'
    })

    const records = await response.json()

    if (!response.ok) {
      throw new ErrorGettingRecords(
        records.msg ?? 'Hubo un error en la petitcion'
      )
    }

    return records.map((record: any): Record => {
      return {
        recordId: record.Id,
        productId: record.ProductoId,
        productName: record.Producto,
        quantity: record.Cantidad,
        unitId: record.UnitId,
        unit: record.Volumen,
        type: record.Tipo,
        email: record.Email,
        date: record.Fecha
      }
    })
  } catch (e) {
    console.error(e)
    throw e
  }
}
