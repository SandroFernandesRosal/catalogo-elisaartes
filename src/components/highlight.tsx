import Image from 'next/image'
import perfil from '../../public/logo.png'

import ButtonPay from './button-pay'

export default function Highlight() {
  return (
    <section className="flex bg-bgdark flex-wrap items-center w-full justify-center  md:justify-evenly py-10  gap-4 bg-[url(/bgbottom.png)] bg-bottom bg-repeat-x md:bg-contain">
      <div className="z-20  gap-2 flex flex-col ">
        <h1 className="flex font-Bad font-bold justify-center text-5xl md:text-5xl lg:text-6xl text-textprimary text-center w-[100%] max-w-[500px] ">
          Elisa Artes Digitais
        </h1>
        <span className="flex self-center w-[70%] text-xl text-center">
          Trabalhamos com modelos prontos e personalizados
        </span>

        <ButtonPay name="Quero fazer um pedido" />
      </div>
      <div className="z-20 mb-5">
        <Image
          src={perfil}
          alt="logo"
          width={300}
          height={300}
          quality={100}
          priority
          className="max-w-[300px] lg:max-w-[300px]"
        />
      </div>
    </section>
  )
}
