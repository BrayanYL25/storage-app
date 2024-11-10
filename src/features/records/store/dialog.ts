import { create } from 'zustand'
import { CreateRecordDialog } from 'src/types'

const useCreateRecordDialog = create<CreateRecordDialog>((set) => ({
  stateRecordDialog: false,
  closeRecordDialog: () => set(() => ({ stateRecordDialog: false })),
  openRecordDialog: () => set(() => ({ stateRecordDialog: true }))
}))

export { useCreateRecordDialog }
