import { NewRecord } from 'src/types'
import { createRecordEndpoint } from '@/services/endpoints'

export default async function createRecord(record: NewRecord) {
  try {
    const response = await fetch(createRecordEndpoint, {
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

    const recordCreated = response.json()

    return recordCreated
  } catch (e) {
    console.error(e)
  }
}
