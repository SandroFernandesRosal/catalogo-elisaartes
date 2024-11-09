'use client'
import { ConvitesProps } from '@/data/types/convites'
import { convitesData } from '@/data/convitesData'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'
import { useState, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Convites() {
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({})
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handlePlayPause = (id: number) => {
    const videoElement = videoRefs.current[id]
    if (videoElement) {
      if (isPlaying[id]) {
        videoElement.pause()
      } else {
        videoElement.play()
      }
      setIsPlaying((prevState) => ({ ...prevState, [id]: !prevState[id] }))
    }
  }

  return (
    <section className="bg-bgdark flex flex-wrap justify-center items-center">
      {convitesData.map((convite: ConvitesProps) => (
        <div
          key={convite.id}
          className="flex flex-col justify-center items-center bg-white gap-4 w-full pt-4 bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain"
        >
          <h1 className="pt-10 text-5xl text-center font-Bad font-extrabold">
            {convite.title}
          </h1>
          <div className="flex">
            <span className="border-b-4 w-24 border-primarypink text-3xl mb-5"></span>
            <span className="border-b-4 w-24 border-textdark text-3xl mb-5"></span>
          </div>
          <div
            className={`flex ${convite.title === 'Convite interativo 2 botões' || convite.title === 'Convite interativo animado' || convite.title === 'Convite infinito' || convite.title === 'Convite animado gif' ? 'flex-row-reverse' : ''} justify-evenly w-full ${convite.title === 'Convite interativo animado' ? 'flex-wrap' : 'flex-nowrap'}`}
          >
            <div
              className={`flex justify-center w-[50%] ${convite.title === 'Convite interativo animado' && 'w-[500px] flex-wrap md:w-[100%] lg:max-w-[800px] mb-5'}`}
            >
              {convite.img &&
                convite.img.map((imgUrl: string) => (
                  <div
                    key={imgUrl}
                    className={`relative w-full max-w-[309px] aspect-[309/510] ${convite.title === 'Convite interativo animado' && 'w-[39%] md:w-[33%]  max-w-[309px] flex-wrap'} `}
                  >
                    <Image
                      src={imgUrl}
                      alt={convite.title}
                      width={309}
                      height={510}
                      quality={100}
                      className="object-fill"
                    />
                  </div>
                ))}

              {convite.video && (
                <div
                  className={`relative w-full max-w-[309px] aspect-[309/510] ${convite.title === 'Convite interativo animado' && 'w-[39%] md:w-[33%]'}`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[convite.id] = el
                    }}
                    preload="metadata"
                    className="w-full h-full"
                    controls={false}
                    onClick={() => handlePlayPause(convite.id)}
                  >
                    <source src={convite.video} type="video/mp4" />
                    <track
                      src={convite.video}
                      kind="subtitles"
                      srcLang="pt-br"
                      label="Portuguese"
                    />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>

                  {!isPlaying[convite.id] && (
                    <button
                      onClick={() => handlePlayPause(convite.id)}
                      className="absolute inset-0 self-center justify-self-center flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full w-16 h-16"
                    >
                      <FaPlay className="w-8 h-8" />
                    </button>
                  )}
                </div>
              )}
            </div>

            <ul
              className={`${convite.title === 'Convite interativo animado' ? 'w-[50%] gap-2' : 'w-[50%]'} gap-2 items-center flex flex-col justify-around`}
            >
              {convite.subtitles.map((sub: string, i: number) => (
                <li
                  className="flex items-center gap-2 w-[90%] text-textlight md:w-[50%] bg-bgdark rounded-lg px-[2px] p-1"
                  key={i}
                >
                  <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
                  <span>{sub}</span>
                </li>
              ))}
              <p className="my-2 text-black italic w-[90%] md:w-[50%]">
                {convite.info}
              </p>
              <div className="flex gap-3 my-1 mx-2">
                <Link
                  href={convite.button}
                  className="p-1 text-center flex justify-center items-center px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Ver modelo
                </Link>
                <Link
                  href={`https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20${convite.title}`}
                  className="p-1 text-center flex justify-center items-center px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Fazer pedido
                </Link>
              </div>

              <div className="md:flex hidden">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/pronto.png"
                    alt=""
                    width={150}
                    height={100}
                    className="w-auto h-auto"
                  />
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

          <div className="flex md:hidden">
            <div className="relative flex items-center justify-center">
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
          <div className="w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-contain"></div>
        </div>
      ))}
    </section>
  )
}
