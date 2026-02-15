'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'
import { SavethedateProps } from '@/data/types/savathedate'
import { SavethedateData } from '@/data/savethedateData'
import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Savethedate() {
  const el = useRef<HTMLUListElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      SavethedateData.forEach((project) => {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: `.project-${project.id}`,
              scrub: true,
              markers: false,
              start: 'top 100%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.project-${project.id}`,
            {
              opacity: 0,
              rotate: 100,
            },
            {
              opacity: 1,
              rotate: 0,
            },
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.project')
    }
  }, [])

  return (
    <section
      ref={el}
      className="bg-[url(/bgbottom.webp)] bg-top bg-repeat-x md:bg-contain pt-16 bg-white flex flex-col items-center gap-4 mb-3 md:mb-7"
    >
      {SavethedateData.map((save: SavethedateProps) => (
        <div
          key={save.id}
          className=" flex flex-col w-full items-center gap-4 mb-3 md:mb-7"
        >
          <h1 className="text-5xl text-center font-Bad font-extrabold">
            {save.title}
          </h1>
          <div className="flex">
            <span className="border-b-4 w-20  border-primarypink  text-3xl mb-5"></span>
            <span className="border-b-4 w-20 border-secondarypink  text-3xl mb-5"></span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-evenly w-full flex-row-reverse px- overflow-hidden px-2">
            {' '}
            <div
              className={`bg-white  max-w-[309px] aspect-[309/510]   pt-10 mb-5 w-[50%] project project-${save.id}`}
            >
              <Image
                src={save.img}
                width={500}
                height={500}
                quality={100}
                alt={save.title}
                className="object-fill border-[1px] border-zinc-300"
              />
            </div>
            <ul className=" w-[50%] max-w-[500px] gap-2 items-center flex flex-col justify-around">
              {save.subtitles.map((sub: string, i: number) => (
                <li
                  key={i}
                  className="flex items-center gap-2 w-[90%]  text-textlight bg-bgpink rounded-lg px-[2px] p-1"
                >
                  <IoIosHeart className="text-secondarypink min-w-[20px] justify-start" />
                  {sub}
                </li>
              ))}

              <p className="my-2 text-black italic w-[90%]">
                Imagem ilustrativa. Criamos qualquer tema.
              </p>
              <div className="flex gap-3 my-1 mx-2">
                <Link
                  href={save.button}
                  className="h-12 text-center flex justify-center items-center px-2 bg-secondarypink text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Ver modelo
                </Link>
                <Link
                  href={
                    'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para'
                  }
                  className="h-12 text-center flex justify-center items-center  px-2 bg-secondarypink text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Fazer pedido
                </Link>
              </div>

              <div className="hidden md:flex justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center">
                  <Image
                    src="/pronto.webp"
                    alt="preço do pronto"
                    width={150}
                    height={100}
                  />
                  <span className="absolute bottom-11 md:bottom-11 text-lg md:text-2xl ml-2 font-bold">
                    {save.priceTwo}
                  </span>
                </div>
              
              </div>
            </ul>
            <div className="md:hidden flex justify-center w-full gap-4">
              <div className="relative flex md:hidden flex-col items-center justify-center">
                <Image
                  src="/pronto.webp"
                  alt="preço do pronto"
                  width={150}
                  height={100}
                />
                <span className="absolute bottom-11 md:bottom-11 text-lg md:text-2xl ml-2 font-bold">
                  {save.priceTwo}
                </span>
              </div>
             
            </div>
          </div>
        </div>
      ))}

      <div className=" w-full bg-[url(/bgtop.webp)] h-[100px] bg-bottom bg-repeat-x md:bg-cover"></div>
    </section>
  )
}
