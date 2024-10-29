import Controls from '../components/Controls'
import { Records } from '../components/Records'
import useRecords from '../hooks/useRecords'

export default function Incomes() {
  const { records } = useRecords({ type: 'incomesEndpoint' })

  return (
    <main className="px-9 pt-6">
      <Controls />
      <Records data={records} title={'Últimas Salidas'} />
    </main>
  )
}
