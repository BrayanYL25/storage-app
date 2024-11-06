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
        productId: record.product_id,
        userId: record.user_id,
        recordQuantity: record.record_quantity,
        recordDate: record.record_date
      })
    })

    if (!response.ok) {
      throw new Error('El error esta en la api')
    }
    const recordCreated = await response.json()

    return { newRecord: recordCreated }
  } catch (e) {
    console.log(e)
    throw e
  }
}
