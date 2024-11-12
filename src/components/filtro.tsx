'use client'

import { FiltroData } from '@/data/filtroData'
import { FiltroProps } from '@/data/types/filtro'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'
import SliderImg from './slider-img'
import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Filtro() {
  const el = useRef<HTMLUListElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      FiltroData.forEach((project) => {
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
              rotate: -100,
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
      className="bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain pt-16 bg-white flex flex-col items-center gap-4 mb-3 md:mb-7 "
      ref={el}
    >
      {FiltroData.map((filtro: FiltroProps) => (
        <div
          key={filtro.id}
          className=" flex flex-col w-full items-center gap-4 mb-3 md:mb-7 overflow-hidden"
        >
          <h1 className="text-5xl text-center font-Bad font-extrabold">
            {filtro.title}
          </h1>
          <div className="flex">
            <span className="border-b-4 w-20  border-primarypink  text-3xl mb-5"></span>
            <span className="border-b-4 w-20 border-secondarypink  text-3xl mb-5"></span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-evenly w-full overflow-hidden">
            {' '}
            <div
              className={`bg-white  max-w-[309px] aspect-[309/510]   pt-10 mb-5 w-[50%] project project-${filtro.id}`}
            >
              <SliderImg imgs={filtro.img} />
            </div>
            <ul className=" w-[50%] max-w-[500px] gap-2 items-center flex flex-col justify-around">
              {filtro.subtitles.map((sub: string, i: number) => (
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
                  href={filtro.button}
                  className="h-12 py-4 md:py-1 text-center flex justify-center items-center  px-2 bg-secondarypink text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Ver modelo
                </Link>
                <Link
                  href={
                    'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para'
                  }
                  className="h-12 py-4 md:py-1 text-center flex justify-center items-center  px-2 bg-secondarypink text-white rounded-lg hover:bg-primarypink/90"
                  target="_blank"
                >
                  Fazer pedido
                </Link>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="relative flex flex-col items-center justify-center">
                  <Image
                    src="/personalizado.png"
                    alt=""
                    width={150}
                    height={100}
                  />
                  <span className="absolute bottom-9 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                    {filtro.price}
                  </span>
                </div>
              </div>
            </ul>
            <div className="relative flex md:hidden flex-col items-center justify-center">
              <Image src="/personalizado.png" alt="" width={150} height={100} />
              <span className="absolute bottom-9 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                {filtro.price}
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className=" w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-cover"></div>
    </section>
  )
}
