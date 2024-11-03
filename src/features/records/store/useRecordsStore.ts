import { create } from 'zustand'
import { RecordsState } from 'src/types'
import { type viewRecord } from 'src/types'
import {
  expensesEndpoint,
  incomesEndpoint,
  allRecordsEndpoint
} from '@/services/endpoints'
import getRecords from '../services/get_records.ts'

const useRecordsStore = create<RecordsState>((set) => ({
  records: undefined,
  loading: false,
  error: null,
  fetchRecords: async (type: viewRecord) => {
    set({ loading: true, error: null })
    let endpoint: string
    if (type === 'expensesEndpoint') {
      endpoint = expensesEndpoint
    } else if (type === 'incomesEndpoint') {
      endpoint = incomesEndpoint
    } else {
      endpoint = allRecordsEndpoint
    }

    try {
      const data = await getRecords({ endpoint })
      set({ records: data, loading: false })
    } catch (e) {
      console.error(e)
      set({ error: 'Hubo un error', loading: false })
    }
  }
}))

export default useRecordsStore
