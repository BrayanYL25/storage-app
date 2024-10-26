import CreateReportButton from './CreateReportButton'
import NewRecordButton from './NewRecordButton'

export default function Controls() {
  return (
    <section className="flex gap-3">
      <NewRecordButton />
      <CreateReportButton />
    </section>
  )
}
