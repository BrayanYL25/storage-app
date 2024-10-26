export interface Record {
  id: number
  product: string
  quantity: number
  unit: string
  type: 'SALIDA' | 'INGRESO'
  email: string
  date: string
}
