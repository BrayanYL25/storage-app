import { FormEvent } from 'react'
import Overlay from './Overlay'

export default function FormDialog({
  submit,
  children
}: {
  submit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>
  children: React.ReactNode
}) {
  return (
    <>
      <Overlay>
        <form
          className="w-1/2 lg:w-1/3 xl:w-[30%] 2xl:w-3/12 3xl:w-2/12 bg-white p-6 rounded-lg"
          onSubmit={submit}
        >
          {children}
        </form>
      </Overlay>
    </>
  )
}
