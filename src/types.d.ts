export interface Record {
  userId?: number
  recordId: number
  productId: number
  productName: string
  quantity: number
  unitId: number
  unit: string
  type: 'SALIDA' | 'INGRESO'
  email: string
  date: string
}

export type EdittedRecord = Required<
  Pick<
    Record,
    'recordId' | 'productId' | 'unitId' | 'productName' | 'quantity' | 'date'
  >
> & {
  open: boolean
}

export type UpdateRecordRequest = Required<
  Pick<Record, 'recordId' | 'userId' | 'productId' | 'quantity' | 'date'>
>

export type RecordRequest = Required<
  Pick<Record, 'userId' | 'productId' | 'quantity' | 'date'>
>

export type RecordEndpoints = {
  ALL: string
  RECORD: string
  OUTCOME: string
  INCOME: string
  MOST_CONSUMED: string
  MOST_ENTERED: string
}

type TypeRecord = keyof Pick<RecordEndpoints, 'INCOME' | 'OUTCOME'>
type LastTwoKeys = keyof Pick<RecordEndpoints, 'MOST_CONSUMED' | 'MOST_ENTERED'>

export interface Product {
  id: number
  name?: string
  stock?: number
  unitId?: number
  unitName?: string
}

export type EdittedProduct = Required<Product> & {
  open: boolean
}

export interface Units {
  unitId: number
  unitName: string
}

export type CreateProductRequest = Required<Pick<Product, 'name' | 'stock'>> & {
  unitId: number
}

export type UpdateProductRequest = Required<
  Pick<Product, 'id' | 'name' | 'stock' | 'unitId'>
>

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

type dialog = {
  id: number | null
  isOpen: boolean
}

type viewRecord = 'EXPENSES' | 'INCOMES'

export interface RecordsState {
  records: Record[] | undefined
  loading: boolean
  error: string | null
  fetchRecords: (key: keyof RecordEndpoints) => Promise<void>
}

export interface ProductsStore {
  products: Product[]
  loading: boolean
  error: string | null
  findAll: () => Promise<void>
}

export interface CreateRecordDialog {
  stateRecordDialog: boolean
  closeRecordDialog: () => void
  openRecordDialog: () => void
}

export interface CreateReportDialog {
  stateReportDialog: boolean
  closeReportDialog: () => void
  openReportDialog: () => void
}
