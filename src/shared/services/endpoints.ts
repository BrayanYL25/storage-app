const EXPENSES_ENPOINTS = {
  REPORT: 'http://localhost:3000/api/report/expenses',
  RECORD: 'http://localhost:3000/api/record/expenses'
}

const INCOMES_ENDPOINTS = {
  REPORT: 'http://localhost:3000/api/report/expenses',
  RECORD: 'http://localhost:3000/api/record/incomes'
}

const AUTH_ENDPOINTS = {
  LOGIN: 'http://localhost:3000/api/user/login',
  LOGOUT: 'http://localhost:3000/api/user/logout',
  CHECK: 'http://localhost:3000/api/user/check',
  REFRESH: 'http://localhost:3000/api/user/refresh'
}

const PRODUCT_ENDPOINTS = {
  PRODUCT: 'http://localhost:3000/api/product'
}

const RECORD_ENDPOINTS = {
  ALL: 'http://localhost:3000/api/record/all',
  RECORD: 'http://localhost:3000/api/record'
}

export {
  PRODUCT_ENDPOINTS,
  RECORD_ENDPOINTS,
  AUTH_ENDPOINTS,
  EXPENSES_ENPOINTS,
  INCOMES_ENDPOINTS
}
