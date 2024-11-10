import { useCreateRecordDialog } from '../../records/store/dialog'
import useReportStore from '../store/useReportStore'
import CreateReportButton from './CreateReportButton'
import NewRecordButton from './NewRecordButton'

export default function Controls() {
  const { openRecordDialog: openCreateRecordDialog } = useCreateRecordDialog()
  const { openReportDialog } = useReportStore()

  return (
    <section className="flex gap-3">
      <NewRecordButton handleClick={openCreateRecordDialog} />
      <CreateReportButton handleClick={openReportDialog} />
    </section>
  )
}
