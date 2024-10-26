import { PlusIcon } from '@/components/Icons'

export default function NewRecordButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-soft-teal text-lg px-4 py-2 font-bold text-deep-blue rounded-md hover:brightness-105 hover:outline hover:outline-light-gray hover:outline-4"
      onClick={() => console.log('Works')}
    >
      {/* <img src="/plus.svg" alt="" height={30} width={30} /> */}
      <PlusIcon />
      Nuevo Registro
    </button>
  )
}
