import Link from 'next/link'

interface ButtonPayProps {
  name: string
}

export default function ButtonPay({ name }: ButtonPayProps) {
  return (
    <Link
      href={
        'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1%20Elisa,%20vim%20pelo%20instagram%20e%20gostaria%20de%20um%20or%C3%A7amento'
      }
      target="blank"
      className="cursor-pointer self-center text-white bg-textdark p-2 px-4 rounded-md font-bold hover:bg-primarypink/60"
    >
      {name}
    </Link>
  )
}
