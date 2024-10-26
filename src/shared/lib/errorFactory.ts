const createError = ({ name }: { name: string }) => {
  return class CustomError extends Error {
    constructor(message: string) {
      super(message)
      this.name = name
    }
  }
}

export const SignInRequestFailed = createError({ name: 'SignInRequestFailed' })
export const AccessDenied = createError({ name: 'AccessDenied' })
export const LogOutError = createError({ name: 'LogOutError' })
