import Link from 'next/link'

interface ButtonPayProps {
  name: string
}

export default function ButtonPay({ name }: ButtonPayProps) {
  return (
    <Link
      href={'https://pay.kiwify.com.br/cyryVKs'}
      target="blank"
      className="cursor-pointer self-center bg-secondarypink p-2 px-4 rounded-md font-bold hover:bg-primarypink"
    >
      {name}
    </Link>
  )
}
