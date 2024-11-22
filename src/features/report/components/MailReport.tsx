import { Input } from '@/components/Input'
import { Label } from '@/components/Label'

export default function MailReport() {
  return (
    <form action="">
      <Label className="text-[#003249] text-base font-semibold">
        Correo Destinatario
      </Label>
      <Input />
      <button
        type="submit"
        className="w-full mt-4 bg-[#007EA7] text-white font-bold rounded-md py-1"
      >
        Enviar Correo
      </button>
    </form>
  )
}
