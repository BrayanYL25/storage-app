import { ErrorEditingRecord, UnknownOriginError } from '@/lib/errorFactory'
import { RECORD_ENDPOINTS } from '@/services/endpoints'
import { EdittedRecord } from 'src/types'

export default async function updateRecord({
  record
}: {
  record: EdittedRecord
}) {
  try {
    const response = await fetch(
      `${RECORD_ENDPOINTS.RECORD}/${record.recordId}`,
      {
        method: 'PUT',
        credentials: 'include'
      }
    )

    if (!response.ok) {
      throw new ErrorEditingRecord('Hubo un error editando el registro')
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
