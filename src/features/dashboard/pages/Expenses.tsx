import { useEffect } from 'react'
import Controls from '../components/Controls'
import DialogRecord from '../../records/components/DialogRecord'
import { Records } from '../components/Records'
import useRecords from '../hooks/useRecords'
import { useDialog } from '../../records/store/dialog'

export default function Expenses() {
  const { records } = useRecords({ type: 'expensesEndpoint' })
  const { stateDialog, closeDialog } = useDialog()

  useEffect(() => {
    closeDialog()
  }, [])

  return (
    <main className="px-9 pt-6">
      <Controls />
      <Records data={records} title={'Últimas Salidas'} />
      {stateDialog && <DialogRecord />}
    </main>
  )
}
