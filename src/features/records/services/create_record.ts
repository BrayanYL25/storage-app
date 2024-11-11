import { RecordRequest } from 'src/types'
import { ErrorCreatingRecord, UnknownOriginError } from '@/lib/errorFactory.ts'

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
      throw new ErrorCreatingRecord('Hubo un error creando el registro')
    }
    const recordCreated = await response.json()

    return { newRecord: recordCreated }
  } catch (e) {
    if (e instanceof ErrorCreatingRecord) {
      console.log(e.message)
      throw e
    } else {
      throw new UnknownOriginError(
        'No hemos podido encontrar el origen del error'
      )
    }
  }
}
