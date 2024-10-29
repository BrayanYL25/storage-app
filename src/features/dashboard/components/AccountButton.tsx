import { AccountIcon } from '@/components/Icons'

export default function AccountButton() {
  return (
    <button
      type="button"
      className="flex items-center font-semibold py-3 px-4 gap-2 text-deep-blue"
    >
      <AccountIcon />
      Cuenta
    </button>
  )
}
