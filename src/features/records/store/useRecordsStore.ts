import { create } from 'zustand'
import { RecordsState } from 'src/types'
import { type viewRecord } from 'src/types'
import {
  EXPENSES_ENPOINTS,
  INCOMES_ENDPOINTS,
  RECORD_ENDPOINTS
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
      endpoint = EXPENSES_ENPOINTS.RECORD
    } else if (type === 'incomesEndpoint') {
      endpoint = INCOMES_ENDPOINTS.RECORD
    } else {
      endpoint = RECORD_ENDPOINTS.ALL
    }

    try {
      const data = await getRecords({ endpoint })
      set({ records: data, loading: false })
    } catch (e) {
      console.error(e)
      set({ error: 'Hubo un error. Inicia sesión otra vez.', loading: false })
    }
  }
}))

export default useRecordsStore
