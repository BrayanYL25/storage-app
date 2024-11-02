import useRecordsStore from '../../records/store/useRecordsStore.ts'
import DialogRecord from '../../records/components/DialogRecord.tsx'
import { useDialog } from '../../records/store/dialog.ts'
import Controls from '../components/Controls'
import { Records } from '../components/Records'
import { useEffect } from 'react'

export default function Incomes() {
  const { records, fetchRecords } = useRecordsStore()
  const { stateDialog, closeDialog } = useDialog()

  useEffect(() => {
    fetchRecords('incomesEndpoint')
    closeDialog()
  }, [])
  return (
    <main className="px-9 pt-6">
      <Controls />
      <Records data={records} title={'Últimas Salidas'} />
      {stateDialog && <DialogRecord typeRecord={1} />}
    </main>
  )
}
