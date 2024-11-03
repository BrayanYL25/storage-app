import useRecordsStore from '../../records/store/useRecordsStore.ts'
import DialogRecord from '../../records/components/DialogRecord.tsx'
import { useDialog } from '../../records/store/dialog.ts'
import Controls from '../components/Controls'
import { RecordsTable } from '../../records/components/RecordsTable.tsx'
import { useEffect, useState } from 'react'
import useReportStore from '../store/useReportStore.ts'
import ReportDialog from '../../report/components/ReportDialog.tsx'
import { useToast } from '@/lib/useToast.ts'
import { ToastProps } from '@/components/Toast.tsx'

export default function Incomes() {
  const { loading, records, fetchRecords } = useRecordsStore()
  const { stateDialog, closeDialog } = useDialog()
  const { stateDialog: reportDialog, closeDialog: closeReportDialog } =
    useReportStore()
  const [toastInfo, setToastInfo] = useState<ToastProps | undefined>()
  const { toast } = useToast()

  useEffect(() => {
    fetchRecords('expensesEndpoint')

    closeReportDialog()
    closeDialog()
  }, [])

  useEffect(() => {
    if (toastInfo) {
      toast(toastInfo)
    }
  }, [toastInfo])
  return (
    <main className="px-9 pt-6">
      <Controls />
      <RecordsTable
        data={records}
        title={'Últimas Ingresos'}
        isLoading={loading}
      />
      {stateDialog && <DialogRecord typeRecord={1} setToast={setToastInfo} />}
      {reportDialog && <ReportDialog />}
    </main>
  )
}
