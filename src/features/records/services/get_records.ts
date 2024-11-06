import { Record } from 'src/types'

export default async function getRecords({ endpoint }: { endpoint: string }) {
  try {
    const response = await fetch(endpoint, {
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error('Hubo un error en la peticion')
    }
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
    throw e
  }
}
