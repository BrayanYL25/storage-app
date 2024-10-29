import { useDialog } from '../../records/store/dialog'
import CreateReportButton from './CreateReportButton'
import NewRecordButton from './NewRecordButton'

export default function Controls() {
  const { openDialog } = useDialog()

  const handleClick = () => {
    openDialog()
  }
  return (
    <section className="flex gap-3">
      <NewRecordButton handleClick={handleClick} />
      <CreateReportButton />
    </section>
  )
}
