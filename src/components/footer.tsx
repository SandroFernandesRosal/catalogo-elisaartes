import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-white h-20 gap-2">
      Desenvolvido por:
      <Link
        href={'https://sandrofernandesdev.vercel.app/'}
        target="blank"
        className="text-lg font-bold"
      >
        {' '}
        Sandro Fernandes
      </Link>
    </footer>
  )
}
