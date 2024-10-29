import { LogOutIcon } from '@/components/Icons'

export default function LogoutButton() {
  return (
    <button
      type="button"
      className="flex items-center font-semibold py-3 px-4 gap-2 text-[#F95454]"
    >
      <LogOutIcon /> Cerrar sesion
    </button>
  )
}
