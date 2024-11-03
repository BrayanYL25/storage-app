import { create } from 'zustand'
import { RecordDialog } from 'src/types'

const useDialog = create<RecordDialog>((set) => ({
  stateRecordDialog: false,
  closeRecordDialog: () => set(() => ({ stateRecordDialog: false })),
  openRecordDialog: () => set(() => ({ stateRecordDialog: true }))
}))

export { useDialog }
