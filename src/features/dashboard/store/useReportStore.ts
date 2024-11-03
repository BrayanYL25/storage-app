import { DialogState } from 'src/types'
import { create } from 'zustand'

const useReportStore = create<DialogState>((set) => ({
  stateDialog: false,
  closeDialog: () => set(() => ({ stateDialog: false })),
  openDialog: () => set(() => ({ stateDialog: true }))
}))

export default useReportStore
