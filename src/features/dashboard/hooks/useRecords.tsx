import { useEffect, useState } from 'react'
import getRecords from '../services/get_records'
import { Record } from 'src/types'
import { type viewRecord } from 'src/types'
import {
  expensesEndpoint,
  incomesEndpoint,
  allRecordsEndpoint
} from '@/services/endpoints'

export default function useRecords({ type }: { type: viewRecord }) {
  const [records, setRecords] = useState<Record[] | undefined>()

  useEffect(() => {
    let endpoint: string
    if (type === 'expensesEndpoint') {
      endpoint = expensesEndpoint
    } else if (type === 'incomesEndpoint') {
      endpoint = incomesEndpoint
    } else {
      endpoint = allRecordsEndpoint
    }
    getRecords({ endpoint }).then(setRecords)
  }, [])

  return { records }
}
