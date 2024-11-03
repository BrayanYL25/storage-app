import { ReactNode } from 'react'

export default function Overlay({ children }: { children: ReactNode }) {
  return (
    <div className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-85">
      {children}
    </div>
  )
}
