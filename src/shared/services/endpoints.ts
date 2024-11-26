import { RecordEndpoints } from 'src/types'

const EXPENSES_ENPOINTS = {
  REPORT: 'https://localhost:3000/api/report/expenses',
  RECORD: 'https://localhost:3000/api/record/outcome'
}

const INCOMES_ENDPOINTS = {
  REPORT: 'https://localhost:3000/api/report/incomes',
  RECORD: 'https://localhost:3000/api/record/income'
}

const AUTH_ENDPOINTS = {
  LOGIN: 'https://localhost:3000/api/user/login',
  LOGOUT: 'https://localhost:3000/api/user/logout',
  CHECK: 'https://localhost:3000/api/user/check',
  REFRESH: 'https://localhost:3000/api/user/refresh'
}

const REPORTS_ENPOINT = {
  EXPENSES: 'https://localhost:3000/api/report/expenses',
  INCOMES: 'https://localhost:3000/api/report/incomes'
}

const PRODUCT_ENDPOINTS = {
  PRODUCT: 'https://localhost:3000/api/product'
}

const UNITS_ENDPOINTS = {
  ALL: 'https://localhost:3000/api/unit/all'
}

const RECORD_ENDPOINTS: RecordEndpoints = {
  ALL: 'https://localhost:3000/api/record/all',
  RECORD: 'https://localhost:3000/api/record',
  OUTCOME: 'https://localhost:3000/api/record/outcome',
  INCOME: 'https://localhost:3000/api/record/income',
  MOST_CONSUMED: 'https://localhost:3000/api/record/outcome/mostconsumed',
  MOST_ENTERED: 'https://localhost:3000/api/record/income/mostentered'
}

export {
  PRODUCT_ENDPOINTS,
  RECORD_ENDPOINTS,
  REPORTS_ENPOINT,
  AUTH_ENDPOINTS,
  EXPENSES_ENPOINTS,
  INCOMES_ENDPOINTS,
  UNITS_ENDPOINTS
}
