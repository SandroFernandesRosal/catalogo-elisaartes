import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Lilita_One as Permanent,
} from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const pacifico = Permanent({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: 'Instagram para empreendedoras',
  description: 'Página de vendas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${pacifico.variable} `}>
        <Header />
        {children}
      </body>
    </html>
  )
}
