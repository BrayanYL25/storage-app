import { RecordRequest } from 'src/types'

export default async function createRecord(
  endpoint: string,
  record: RecordRequest
) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        productId: record.productId,
        userId: record.userId,
        quantity: record.quantity,
        date: record.date
      })
    })

    if (!response.ok) {
      throw new Error('Hubo un error creando el registro')
    }
    const recordCreated = await response.json()

    return { newRecord: recordCreated }
  } catch (e) {
    console.log(e)
    throw e
  }
}
