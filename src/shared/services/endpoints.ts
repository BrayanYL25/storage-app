import { RecordEndpoints } from 'src/types'

const EXPENSES_ENPOINTS = {
  REPORT: 'http://localhost:3000/api/report/expenses',
  RECORD: 'http://localhost:3000/api/record/outcome'
}

const INCOMES_ENDPOINTS = {
  REPORT: 'http://localhost:3000/api/report/incomes',
  RECORD: 'http://localhost:3000/api/record/income'
}

const AUTH_ENDPOINTS = {
  LOGIN: 'http://localhost:3000/api/user/login',
  LOGOUT: 'http://localhost:3000/api/user/logout',
  CHECK: 'http://localhost:3000/api/user/check',
  REFRESH: 'http://localhost:3000/api/user/refresh'
}

const REPORTS_ENPOINT = {
  EXPENSES: 'http://localhost:3000/api/report/expenses',
  INCOMES: 'http://localhost:3000/api/report/incomes'
}

const PRODUCT_ENDPOINTS = {
  PRODUCT: 'http://localhost:3000/api/product'
}

const RECORD_ENDPOINTS: RecordEndpoints = {
  ALL: 'http://localhost:3000/api/record/all',
  RECORD: 'http://localhost:3000/api/record',
  OUTCOME: 'http://localhost:3000/api/record/outcome',
  INCOME: 'http://localhost:3000/api/record/income',
  MOST_CONSUMED: 'http://localhost:3000/api/record/outcome/mostconsumed',
  MOST_ENTERED: 'http://localhost:3000/api/record/income/mostentered'
}

export {
  PRODUCT_ENDPOINTS,
  RECORD_ENDPOINTS,
  REPORTS_ENPOINT,
  AUTH_ENDPOINTS,
  EXPENSES_ENPOINTS,
  INCOMES_ENDPOINTS
}
