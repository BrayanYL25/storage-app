import { useEffect } from 'react'
import Controls from '../components/Controls'
import DialogRecord from '../../records/components/DialogRecord'
import { Records } from '../components/Records'
import { useDialog } from '../../records/store/dialog.ts'
import useRecordsStore from '../../records/store/useRecordsStore.ts'
import useReportStore from '../store/useReportStore.ts'
import ReportDialog from '../../report/components/ReportDialog.tsx'

export default function Expenses() {
  const { records, fetchRecords } = useRecordsStore()
  const { stateDialog, closeDialog } = useDialog()
  const { stateDialog: reportDialog, closeDialog: closeReportDialog } =
    useReportStore()

  useEffect(() => {
    fetchRecords('expensesEndpoint')

    closeReportDialog()
    closeDialog()
  }, [])

  //  1 es Ingreso, 2 es Salidas
  return (
    <main className="px-9 pt-6">
      <Controls />
      <Records data={records} title={'Últimas Salidas'} />
      {stateDialog && <DialogRecord typeRecord={2} />}
      {reportDialog && <ReportDialog />}
    </main>
  )
}
