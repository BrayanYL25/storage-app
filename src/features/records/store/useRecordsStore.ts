import { create } from 'zustand'
import { RecordEndpoints, RecordsState } from 'src/types'
import getRecords from '../services/get_records.ts'
import { RECORD_ENDPOINTS } from '@/services/endpoints.ts'

const useRecordsStore = create<RecordsState>((set) => ({
  records: undefined,
  loading: false,
  error: null,
  fetchRecords: async (key: keyof RecordEndpoints) => {
    set({ loading: true, error: null })
    const endpoint = RECORD_ENDPOINTS[key]
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
