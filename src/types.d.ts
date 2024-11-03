export interface Record {
  id: number
  product: string
  quantity: number
  unit: string
  type: 'SALIDA' | 'INGRESO'
  email: string
  date: string
}

export interface RecordRequest {
  product_id: number
  user_id: number
  record_type_id: record_type_id
  record_quantity: number
  record_date: string
}

export interface Product {
  id: number
  name?: string
  stock?: number
  unitId?: number
  unitName?: string
}

export type Month =
  | 'Enero'
  | 'Febrero'
  | 'Marzo'
  | 'Abril'
  | 'Mayo'
  | 'Junio'
  | 'Julio'
  | 'Agosto'
  | 'Septiembre'
  | 'Octubre'
  | 'Noviembre'
  | 'Diciembre'

export interface Months {
  month: Month
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export type Errors = (params: { name: string }) => {
  new (message: string): Error
}

type record_type_id = 1 | 2

type viewRecord = 'expensesEndpoint' | 'incomesEndpoint' | 'all'

//  Store para crear registros - Zustand
export interface RecordsState {
  records: Record[] | undefined
  loading: boolean
  error: string | null
  fetchRecords: (type: viewRecord) => Promise<void>
}

//  Store para crear cuadro de dialogo - Zustand
interface DialogState {
  stateDialog: boolean
  closeDialog: () => void
  openDialog: () => void
}
