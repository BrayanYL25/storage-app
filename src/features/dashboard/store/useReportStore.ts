import { CreateReportDialog } from 'src/types'
import { create } from 'zustand'

const useReportStore = create<CreateReportDialog>((set) => ({
  stateReportDialog: false,
  closeReportDialog: () => set(() => ({ stateReportDialog: false })),
  openReportDialog: () => set(() => ({ stateReportDialog: true }))
}))

export default useReportStore
