import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-bgdark h-20 gap-2">
      Desenvolvido por:
      <Link
        href={'https://sandrodev.com.br'}
        target="blank"
        className="text-lg font-bold"
      >
        {' '}
        Sandro Fernandes
      </Link>
    </footer>
  )
}
