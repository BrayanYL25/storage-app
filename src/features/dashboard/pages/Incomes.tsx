import DashboardContent from '../components/DashboardContent'

export default function Incomes() {
  return (
    <DashboardContent
      endpoint="incomesEndpoint"
      typeRecord={1}
      titleContent="Tus últimos ingresos"
    />
  )
}
