import { useEffect, useState } from 'react'
import getExpenses from '../services/get_expenses'
import { Record } from 'src/types'

export default function useRecords() {
  const [records, setRecords] = useState<Record[] | undefined>()

  useEffect(() => {
    getExpenses().then(setRecords)
  }, [])

  return { records }
}
