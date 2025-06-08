import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

interface ButtonPayProps {
  name: string
}

export default function ButtonPay({ name }: ButtonPayProps) {
  return (
    <Link
      href={
        'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento.%0AModelo%20do%20convite%20(digite%20o%20modelo%20que%20deseja%20ex.:%20tradicional,%20interativo,%20animado%20etc.):%20%0ATema:'
      }
      target="_blank"
      className="cursor-pointer self-center text-white bg-secondarypink p-2 px-4 rounded-md font-bold hover:bg-primarypink/90 flex items-center gap-2"
    >
      {name} <FaWhatsapp className="text-xl" />
    </Link>
  )
}
