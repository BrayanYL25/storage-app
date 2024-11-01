export interface Record {
  id: number
  product: string
  quantity: number
  unit: string
  type: 'SALIDA' | 'INGRESO'
  email: string
  date: string
}

export interface NewRecord {
  product_id: number
  user_id: number
  record_type_id: number
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

interface DialogState {
  stateDialog: boolean
  closeDialog: () => void
  openDialog: () => void
}

type viewRecord = 'expensesEndpoint' | 'incomesEndpoint' | 'all'
