import { ErrorGettingRecords, UnknownOriginError } from '@/lib/errorFactory'
import { UNITS_ENDPOINTS } from '@/services/endpoints'
import { Units } from 'src/types'

export default async function getUnits() {
  try {
    const response = await fetch(UNITS_ENDPOINTS.ALL, {
      credentials: 'include'
    })

    if (!response.ok) {
      const { msg } = await response.json()
      throw new ErrorGettingRecords(msg)
    }

    const parsed: Units[] = await response.json()

    return parsed
  } catch (e) {
    if (e instanceof ErrorGettingRecords) {
      console.error(e.message)
      throw e
    } else {
      throw new UnknownOriginError(
        'No hemos podido encontrar el origen del error'
      )
    }
  }
}
