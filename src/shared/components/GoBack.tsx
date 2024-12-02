import { BackIcon } from './Icons'

export default function GoBack({
  content,
  handleClick
}: {
  content: string
  handleClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label="Volver al inicio"
      className="p-2 flex justify-between items-center gap-2 rounded-md bg-sky-blue hover:bg-light-blue font-semibold text-white transition-all ease-out duration-200"
      onClick={handleClick}
    >
      <BackIcon />
      {content}
    </button>
  )
}
