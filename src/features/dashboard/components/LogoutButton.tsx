import { LogOutIcon } from '@/components/Icons'
import logout from '../../auth/services/logout.ts'
import { LogOutError } from '@/lib/errorFactory'
import { useNavigate } from 'react-router-dom'

export default function LogoutButton() {
  const routeTo = useNavigate()

  const handleClick = async () => {
    try {
      await logout()
      routeTo('/')
    } catch (error) {
      if (error instanceof LogOutError) {
        console.error(error.message)
      } else {
        alert('Hubo un error')
      }
    }
  }
  return (
    <button
      type="button"
      className="flex items-center font-semibold py-3 px-4 gap-2 text-[#F95454]"
      onClick={handleClick}
    >
      <LogOutIcon /> Cerrar sesion
    </button>
  )
}
