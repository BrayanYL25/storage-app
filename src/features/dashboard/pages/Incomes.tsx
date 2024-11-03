import useRecordsStore from '../../records/store/useRecordsStore.ts'
import DialogRecord from '../../records/components/DialogRecord.tsx'
import { useDialog } from '../../records/store/dialog.ts'
import Controls from '../components/Controls'
import { Records } from '../components/Records'
import { useEffect } from 'react'
import useReportStore from '../store/useReportStore.ts'
import ReportDialog from '../../report/components/ReportDialog.tsx'

export default function Incomes() {
  const { records, fetchRecords } = useRecordsStore()
  const { stateDialog, closeDialog } = useDialog()
  const { stateDialog: reportDialog, closeDialog: closeReportDialog } =
    useReportStore()

  useEffect(() => {
    fetchRecords('incomesEndpoint')

    closeReportDialog()
    closeDialog()
  }, [])
  return (
    <main className="px-9 pt-6">
      <Controls />
      <Records data={records} title={'Últimas Salidas'} />
      {stateDialog && <DialogRecord typeRecord={1} />}
      {reportDialog && <ReportDialog />}
    </main>
  )
}
