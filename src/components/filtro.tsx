import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'

export default function Filtro() {
  return (
    <section className="bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain pt-14 bg-white flex flex-col items-center gap-4">
      <h1 className="text-5xl text-center font-Bad font-extrabold">
        Filtro para instagram
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-textdark  text-3xl mb-5"></span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-evenly w-full flex-row-reverse">
        {' '}
        <div className="bg-white flex  justify-evenly md:justify-center md:gap-10 w-[400px] md:w-[50%] items-center mb-5">
          <Image
            src={'/mockupfiltro.png'}
            width={309}
            height={510}
            alt=""
            className="w-[40%] max-w-[309px]"
          />
          <Image
            src={'/qrcode.png'}
            width={309}
            height={510}
            alt=""
            className="w-[40%] max-w-[309px] border-[1px] border-zinc-300"
          />
        </div>
        <ul className="w-[50%] flex gap-2  items-center  flex-col justify-evenly">
          <li className="flex items-center gap-2 w-[90%] text-textlight  md:w-[50%] bg-bgdark rounded-lg px-[2px]">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>
              Filtro moldura personalizado personalizado no tema da festa + card
              QR code
            </span>
          </li>

          <li className="flex items-center gap-2 w-[90%] text-textlight  md:w-[50%] bg-bgdark rounded-lg px-[2px]">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>Desconto para quem fechar junto com o convite</span>
          </li>

          <p className="my-2 text-black italic w-[90%]  md:w-[50%]">
            Imagem ilustrativa. Criamos qualquer tema.
          </p>
          <div className="flex gap-3 my-1 mx-2">
            <Link
              href={''}
              className="p-1 text-center flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
            >
              Ver modelo
            </Link>
            <Link
              href={''}
              className=":p-1 text-center flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
            >
              Fazer pedido
            </Link>
          </div>

          <div className="flex">
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/personalizado.png" alt="" width={150} height={100} />
              <span className="absolute bottom-9 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                R$ 35,00
              </span>
            </div>
          </div>
        </ul>
      </div>

      <div className=" w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-contain"></div>
    </section>
  )
}
