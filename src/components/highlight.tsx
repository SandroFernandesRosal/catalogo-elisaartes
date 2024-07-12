import Image from 'next/image'
import topo from '../../public/foto-perfil.png'
import BackgroundPink from './background-pink'
import BackgroundBlue from './background-blue'
import Link from 'next/link'

export default function Highlight() {
  return (
    <section className="flex bg-bgdark flex-wrap items-center w-full justify-center  md:justify-evenly py-10 gap-4 ">
      <BackgroundPink />
      <BackgroundBlue />
      <div className="z-20  gap-2 flex flex-col ">
        <h1 className="flex justify-center text-5xl md:text-5xl lg:text-6xl text-white text-center w-[100%] max-w-[500px] font-Pacifico">
          Instagram para empreendedoras
        </h1>
        <span className="flex justify-center text-xl text-center">
          Turbine seu instagram, aumente suas vendas e seguidores
        </span>
        <Link
          href={'https://pay.kiwify.com.br/cyryVKs'}
          target="blank"
          className="cursor-pointer self-center bg-secondarypink p-2 px-4 rounded-md font-bold hover:bg-primarypink"
        >
          Quero me inscrever agora
        </Link>
      </div>
      <div className="bg-[url(../../public/moldura.png)] z-20 bg-cover">
        <Image
          src={topo}
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
