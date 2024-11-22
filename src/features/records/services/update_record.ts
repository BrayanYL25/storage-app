import { ErrorEditingRecord, UnknownOriginError } from '@/lib/errorFactory'
import { RECORD_ENDPOINTS } from '@/services/endpoints'
import { UpdateRecordRequest } from 'src/types'

export default async function updateRecord({
  record
}: {
  record: UpdateRecordRequest
}) {
  try {
    const response = await fetch(
      `${RECORD_ENDPOINTS.RECORD}/${record.recordId}`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          userId: record.userId,
          productId: record.productId,
          quantity: record.quantity,
          date: record.date
        })
      }
    )

    if (!response.ok) {
      const { msg } = await response.json()
      throw new ErrorEditingRecord(msg)
    }

    const edittedRecord = await response.json()

    return { edittedRecord }
  } catch (e) {
    if (e instanceof ErrorEditingRecord) {
      console.error(e.message)
      throw e
    } else {
      throw new UnknownOriginError(
        'No hemos podido encontrar el origen del error'
      )
    }
  }
}
