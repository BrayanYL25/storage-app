import { RECORD_ENDPOINTS } from '@/services/endpoints'
import { LastTwoKeys } from 'src/types'

export default async function getMostRecord({
  endpoint
}: {
  endpoint: LastTwoKeys
}) {
  try {
    const url: string = RECORD_ENDPOINTS[endpoint]
    const response = await fetch(url, {
      credentials: 'include'
    })
    const mostRecord = await response.json()
    const mappedMostRecords = mostRecord.map((record: any) => ({
      name: record.productName,
      value: record.total
    }))

    return mappedMostRecords
  } catch (e) {
    console.error(e)
  }
}
