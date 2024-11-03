import { RecordRequest } from 'src/types'
import { RECORD_ENDPOINTS } from '@/services/endpoints'

export default async function createRecord(record: RecordRequest) {
  try {
    const response = await fetch(RECORD_ENDPOINTS.RECORD, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        product_id: record.product_id,
        user_id: record.user_id,
        record_type_id: record.record_type_id,
        record_quantity: record.record_quantity,
        record_date: record.record_date
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
