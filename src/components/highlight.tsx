import Image from 'next/image'
import perfil from '../../public/foto-perfil.png'
import BackgroundPink from './background-pink'
import BackgroundBlue from './background-blue'
import ButtonPay from './button-pay'

export default function Highlight() {
  return (
    <section className="flex bg-bgdark flex-wrap items-center w-full justify-center  md:justify-evenly py-10  gap-4 bg-[url(../../public/topo2.png)] bg-contain bg-left">
      <BackgroundPink />
      <BackgroundBlue />
      <div className="z-20  gap-2 flex flex-col ">
        <h1 className="flex justify-center text-5xl md:text-5xl lg:text-6xl text-white text-center w-[100%] max-w-[500px] font-Pacifico">
          Instagram para empreendedoras
        </h1>
        <span className="flex justify-center text-xl text-center">
          Turbine seu instagram e aumente suas vendas
        </span>
        <ButtonPay name="Quero me inscrever agora" />
      </div>
      <div className="bg-[url(../../public/moldura.png)] z-20 bg-cover">
        <Image
          src={perfil}
          alt=""
          width={400}
          height={400}
          quality={100}
          className="w-[300px] lg:w-[400px]"
        />
      </div>
    </section>
  )
}
