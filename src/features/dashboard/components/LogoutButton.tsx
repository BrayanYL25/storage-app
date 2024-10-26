import { LogOutIcon } from '@/components/Icons'

export default function LogoutButton() {
  return (
    <button
      type="button"
      className="flex items-center font-semibold gap-2 text-[#C62E2E]"
    >
      <LogOutIcon /> Cerrar sesion
    </button>
  )
}
