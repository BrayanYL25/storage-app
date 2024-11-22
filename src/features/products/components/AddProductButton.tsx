import { PlusIcon } from '@/components/Icons'

export default function AddProductButton({ click }: { click: () => void }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-soft-teal text-lg px-4 py-2 font-bold text-deep-blue rounded-md hover:brightness-105 hover:outline hover:outline-light-gray hover:outline-4"
      onClick={click}
    >
      <PlusIcon />
      Nuevo Producto
    </button>
  )
}
