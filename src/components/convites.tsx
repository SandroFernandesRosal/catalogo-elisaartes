import { ConvitesProps } from '@/data/types/convites'
import { convitesData } from '@/data/convitesData'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'

export default function Convites() {
  return (
    <section className="bg-bgdark flex flex-wrap justify-center items-center  ">
      {convitesData.map((convite: ConvitesProps) => (
        <div
          key={convite.id}
          className="flex flex-col justify-center items-center bg-white gap-4 w-[100%]  pt-4 bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain"
        >
          <h1 className="pt-10 text-5xl text-center font-Bad font-extrabold">
            {convite.title}
          </h1>
          <div className="flex">
            <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
            <span className="border-b-4 w-24  border-textdark  text-3xl mb-5"></span>
          </div>
          <div
            className={`flex  ${convite.title === 'Convite interativo 2 botões' || convite.title === 'Convite infinito' || convite.title === 'Convite animado história' ? 'flex-row-reverse' : ''} justify-evenly w-full ${convite.title === 'Convite interativo animado' ? 'flex-wrap' : 'flex-nowrap'}`}
          >
            <div
              className={`flex  justify-center w-[50%] ${convite.title === 'Convite interativo animado' && 'w-[500px] md:w-[80%] lg:max-w-[800px]  mb-5'}`}
            >
              {convite.img &&
                convite.img.map((imgUrl: string) => (
                  <Image
                    className={`${convite.title === 'Convite interativo animado' && 'w-[33%]'}`}
                    key={imgUrl}
                    src={imgUrl}
                    alt={convite.title}
                    width={309}
                    height={550}
                    quality={100}
                  />
                ))}

              {convite.video && (
                <video
                  width="309"
                  height="550"
                  poster=""
                  preload="metadata"
                  className={`${convite.title === 'Convite interativo animado' && 'w-[33%]'}`}
                >
                  <source src={convite.video} type="video/mp4" />
                  <track
                    src={convite.video}
                    kind="subtitles"
                    srcLang="pt-br"
                    label="Portuguese"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <ul
              className={` ${convite.title === 'Convite interativo animado' ? 'w-[50%] gap-2' : 'w-[50%]'} w-[50%]  items-center flex flex-col justify-around `}
            >
              {convite.subtitles.map((sub: string, i: number) => (
                <li
                  className="flex items-center gap-2 w-[90%] text-textlight  md:w-[50%] bg-bgdark rounded-lg px-[2px]"
                  key={i}
                >
                  <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
                  <span>{sub}</span>
                </li>
              ))}
              <p className="my-2 text-black italic w-[90%]  md:w-[50%]">
                {convite.info}
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

              <div className="md:flex hidden">
                <div className="relative flex  items-center justify-center">
                  <Image src="/pronto.png" alt="" width={150} height={100} />
                  <span className="absolute bottom-6 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                    {convite.priceone}
                  </span>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                  <Image
                    src="/personalizado.png"
                    alt=""
                    width={150}
                    height={100}
                  />
                  <span className="absolute bottom-6 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                    {convite.pricetwo}
                  </span>
                </div>
              </div>
            </ul>
          </div>

          <div className="flex md:hidden ">
            <div className="relative flex  items-center justify-center">
              <Image src="/pronto.png" alt="" width={150} height={100} />
              <span className="absolute bottom-9 text-xl ml-2 font-bold">
                {convite.priceone}
              </span>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/personalizado.png" alt="" width={150} height={100} />
              <span className="absolute bottom-9 text-xl ml-2 font-bold">
                {convite.pricetwo}
              </span>
            </div>
          </div>
          <div className=" w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-contain"></div>
        </div>
      ))}
    </section>
  )
}
