import DashboardContent from '../components/DashboardContent'

export default function Expenses() {
  return (
    <DashboardContent
      type="OUTCOME"
      titleContent="Tus últimos consumos"
      barlist="MOST_CONSUMED"
    />
  )
}
