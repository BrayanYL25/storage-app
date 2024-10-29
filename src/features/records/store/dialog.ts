import { create } from 'zustand'
import { DialogState } from 'src/types'

const useDialog = create<DialogState>((set) => ({
  stateDialog: false,
  closeDialog: () => set(() => ({ stateDialog: false })),
  openDialog: () => set(() => ({ stateDialog: true }))
}))

export { useDialog }
