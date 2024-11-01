export interface Record {
  id: number
  product: string
  quantity: number
  unit: string
  type: 'SALIDA' | 'INGRESO'
  email: string
  date: string
}

type record_type_id = 1 | 2

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

export type Errors = (params: { name: string }) => {
  new (message: string): Error
}

interface DialogState {
  stateDialog: boolean
  closeDialog: () => void
  openDialog: () => void
}

type viewRecord = 'expensesEndpoint' | 'incomesEndpoint' | 'all'
