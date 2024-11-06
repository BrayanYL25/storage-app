import { RecordEndpoints } from 'src/types'
import ReportDialog from '#/report/components/ReportDialog'
import useRecordsStore from '#/records/store/useRecordsStore.ts'
import { useDialog } from '#/records/store/dialog.ts'
import { RecordsTable } from '#/records/components/RecordsTable.tsx'
import DialogRecord from '#/records/components/DialogRecord.tsx'
import { Toaster } from '@/components/Toaster'
import { toast } from '@/lib/useToast'
import { ToastProps } from '@/components/Toast.tsx'
import Controls from './Controls'
import { useEffect, useState } from 'react'
import useReportStore from '../store/useReportStore'

export default function DashboardContent({
  titleContent,
  type
}: {
  titleContent: string
  type: keyof RecordEndpoints
}) {
  const { error, loading, records, fetchRecords } = useRecordsStore()
  const { stateRecordDialog, closeRecordDialog } = useDialog()
  const { stateReportDialog, closeReportDialog } = useReportStore()
  const [toastInfo, setToastInfo] = useState<ToastProps | undefined>()

  useEffect(() => {
    fetchRecords(type)

    closeRecordDialog()
    closeReportDialog()
  }, [])

  useEffect(() => {
    if (toastInfo) {
      toast(toastInfo)
    }
  }, [toastInfo])
  return (
    <main className="px-9 pt-6">
      <Controls />
      <Toaster />
      <RecordsTable
        data={records}
        title={titleContent}
        isLoading={loading}
        hasError={Boolean(error)}
        errorMessage={error}
        type={type}
      />
      {stateRecordDialog && (
        <DialogRecord type={type} setToast={setToastInfo} />
      )}
      {stateReportDialog && <ReportDialog />}
    </main>
  )
}
