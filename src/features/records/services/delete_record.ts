import { ErrorDeletingRecord, UnknownOriginError } from '@/lib/errorFactory'
import { RECORD_ENDPOINTS } from '@/services/endpoints'

export default async function deleteRecord({ id }: { id: number }) {
  try {
    const response = await fetch(`${RECORD_ENDPOINTS.RECORD}/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })

    if (!response.ok) {
      throw new ErrorDeletingRecord('Hubo un error borrando el registro')
    }

    return response.ok
  } catch (e) {
    if (e instanceof ErrorDeletingRecord) {
      console.error(e.message)
      throw e
    } else {
      throw new UnknownOriginError(
        'No hemos podido encontrar el origen del error'
      )
    }
  }
}
