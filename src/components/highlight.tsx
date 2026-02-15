import Image from 'next/image'
import perfil from '../../public/logo.webp'

import ButtonPay from './button-pay'

export default function Highlight() {
  return (
    <section className="flex pt-10 md:pb-28 lg:pb-36 flex-wrap items-center w-full justify-center  md:justify-evenly   gap-4 bg-[url(/bg-highlight.webp)] bg-bottom bg-repeat-x  md:bg-contain">
      <div className="z-20  gap-2 flex flex-col ">
        <h1 className="flex font-Bad mb-4 font-bold justify-center text-5xl md:text-5xl lg:text-6xl text-textprimary text-center w-[100%] max-w-[500px] ">
          Elisa Artes Digitais
        </h1>

        <ButtonPay name="Convesar no Whatsapp" />
      </div>
      <div className="z-20">
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
