const login = 'http://localhost:3000/api/user/login'
const checkPermission = 'http://localhost:3000/api/user/check'
const logoutEndpoint = 'http://localhost:3000/api/user/logout'

// records
const expensesEndpoint = 'http://localhost:3000/api/record/expenses'
const incomesEndpoint = 'http://localhost:3000/api/record/incomes'
const allRecordsEndpoint = 'http://localhost:3000/api/record/all'
const createRecordEndpoint = 'http://localhost:3000/api/record/'

export {
  login,
  logoutEndpoint,
  checkPermission,
  expensesEndpoint,
  incomesEndpoint,
  allRecordsEndpoint,
  createRecordEndpoint
}
