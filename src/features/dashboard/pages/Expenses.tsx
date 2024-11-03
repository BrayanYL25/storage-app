import { useEffect, useState } from 'react'
import Controls from '../components/Controls'
import DialogRecord from '../../records/components/DialogRecord'
import { RecordsTable } from '../../records/components/RecordsTable.tsx'
import { useDialog } from '../../records/store/dialog.ts'
import useRecordsStore from '../../records/store/useRecordsStore.ts'
import useReportStore from '../store/useReportStore.ts'
import ReportDialog from '../../report/components/ReportDialog.tsx'
import { Toaster } from '@/components/Toaster.tsx'
import { ToastProps } from '@/components/Toast.tsx'
import { useToast } from '@/lib/useToast.ts'

export default function Expenses() {
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
  //  1 es Ingreso, 2 es Salidas
  return (
    <main className="px-9 pt-6">
      <Controls />
      <Toaster />
      <RecordsTable
        data={records}
        title={'Últimas Salidas'}
        isLoading={loading}
      />
      {stateDialog && <DialogRecord typeRecord={2} setToast={setToastInfo} />}
      {reportDialog && <ReportDialog />}
    </main>
  )
}
