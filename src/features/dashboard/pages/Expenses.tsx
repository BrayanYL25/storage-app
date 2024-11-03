import DashboardContent from '../components/DashboardContent'

export default function Expenses() {
  //  1 es Ingreso, 2 es Salidas
  return (
    <DashboardContent
      endpoint="expensesEndpoint"
      typeRecord={2}
      titleContent="Tus últimos consumos"
    />
  )
}
