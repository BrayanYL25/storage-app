import { Errors } from 'src/types'

const createError: Errors = ({ name }: { name: string }) => {
  return class CustomError extends Error {
    constructor(message: string) {
      super(message)
      this.name = name
    }
  }
}

export const ErrorGettingRecords = createError({ name: 'ErrorGettingRecords' })
export const ErrorCreatingRecord = createError({ name: 'ErrorCreatingRecord' })
export const ErrorEditingRecord = createError({ name: 'ErrorEditingRecord' })
export const ErrorDeletingRecord = createError({ name: 'ErrorDeletingRecord' })

export const ErrorCreatingProduct = createError({
  name: 'ErrorCreatingProduct'
})

export const UnknownOriginError = createError({ name: 'UnknownOriginError' })
export const NullError = createError({ name: 'NullError' })
export const SignInRequestFailed = createError({ name: 'SignInRequestFailed' })
export const AccessDeniedError = createError({ name: 'AccessDenied' })
export const LogOutError = createError({ name: 'LogOutError' })
export const ProductsError = createError({ name: 'ProductsError' })
