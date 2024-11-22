import { Label } from '@/components/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/Select'
import { FormEvent } from 'react'
import { Months } from 'src/types'
import getReport from '../services/get_report'

type timeState = 'month' | 'year'
type data = {
  name: string
  value: timeState
}

const data: data[] = [
  {
    name: 'Mes',
    value: 'month'
  },
  {
    name: 'Año',
    value: 'year'
  }
]

const meses: Months[] = [
  { month: 'Enero', value: 1 },
  { month: 'Febrero', value: 2 },
  { month: 'Marzo', value: 3 },
  { month: 'Abril', value: 4 },
  { month: 'Mayo', value: 5 },
  { month: 'Junio', value: 6 },
  { month: 'Julio', value: 7 },
  { month: 'Agosto', value: 8 },
  { month: 'Septiembre', value: 9 },
  { month: 'Octubre', value: 10 },
  { month: 'Noviembre', value: 11 },
  { month: 'Diciembre', value: 12 }
]

const getLastYears = (count = 2) => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: count }, (_, i) => currentYear - i)
}

export default function DownloadReport() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const dataForm = new FormData(event.currentTarget)
    const month = Number(dataForm.get('month'))
    const year = Number(dataForm.get('year'))

    getReport({ month, year }).then()
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Label className="text-[#003249] text-base font-semibold">Mes</Label>
      <Select name="month">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {meses.map((option, index) => (
            <SelectItem key={index} value={option.value.toString()}>
              {option.month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label className="text-[#003249] text-base font-semibold">Año</Label>
      <Select name="year">
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {getLastYears().map((option, index) => (
            <SelectItem key={index} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <button
        type="submit"
        className="w-full mt-4 bg-[#007EA7] text-white font-bold rounded-md py-1"
      >
        Decargar
      </button>
    </form>
  )
}
