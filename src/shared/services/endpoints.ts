import { RecordEndpoints } from 'src/types'

const EXPENSES_ENPOINTS = {
  REPORT:
    'https://api-rest-storage-production.up.railway.app/api/report/expenses',
  RECORD:
    'https://api-rest-storage-production.up.railway.app/api/record/outcome'
}

const INCOMES_ENDPOINTS = {
  REPORT:
    'https://api-rest-storage-production.up.railway.app/api/report/incomes',
  RECORD: 'https://api-rest-storage-production.up.railway.app/api/record/income'
}

const AUTH_ENDPOINTS = {
  LOGIN: 'https://api-rest-storage-production.up.railway.app/api/user/login',
  LOGOUT: 'https://api-rest-storage-production.up.railway.app/api/user/logout',
  CHECK: 'https://api-rest-storage-production.up.railway.app/api/user/check',
  REFRESH: 'https://api-rest-storage-production.up.railway.app/api/user/refresh'
}

const REPORTS_ENPOINT = {
  EXPENSES:
    'https://api-rest-storage-production.up.railway.app/api/report/expenses',
  INCOMES:
    'https://api-rest-storage-production.up.railway.app/api/report/incomes'
}

const PRODUCT_ENDPOINTS = {
  PRODUCT: 'https://api-rest-storage-production.up.railway.app/api/product'
}

const UNITS_ENDPOINTS = {
  ALL: 'https://api-rest-storage-production.up.railway.app/api/unit/all'
}

const RECORD_ENDPOINTS: RecordEndpoints = {
  ALL: 'https://api-rest-storage-production.up.railway.app/api/record/all',
  RECORD: 'https://api-rest-storage-production.up.railway.app/api/record',
  OUTCOME:
    'https://api-rest-storage-production.up.railway.app/api/record/outcome',
  INCOME:
    'https://api-rest-storage-production.up.railway.app/api/record/income',
  MOST_CONSUMED:
    'https://api-rest-storage-production.up.railway.app/api/record/outcome/mostconsumed',
  MOST_ENTERED:
    'https://api-rest-storage-production.up.railway.app/api/record/income/mostentered'
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
