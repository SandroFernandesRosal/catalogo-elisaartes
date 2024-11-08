import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'

export default function Lembrete() {
  return (
    <section className="bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain pt-14 bg-white flex flex-col items-center gap-4">
      <h1 className="text-5xl text-center font-Bad font-extrabold">Lembrete</h1>
      <div className="flex">
        <span className="border-b-4 w-12  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-12 border-textdark  text-3xl mb-5"></span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-evenly w-full ">
        {' '}
        <div className="bg-white flex  justify-center mb-5 w-[60%] md:w-[50%]">
          <Image
            src={'/lembrete.png'}
            width={309}
            height={510}
            quality={100}
            alt=""
            className="md:w-[309px] md:h-[510px]  border-[1px] border-zinc-300"
          />
        </div>
        <ul className=" w-[50%]  gap-2 items-center flex flex-col justify-around">
          <li className=" w-[90%] text-textlight  md:w-[50%]  md:-w-[100] bg-bgdark rounded-lg px-[2px]">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>
              {' '}
              É enviado alguns dias antes da festa para lembrar o convidado
            </span>
          </li>

          <li className="w-[90%] text-sm text-textlight  md:w-[50%]  md:-w-[100] bg-bgdark rounded-lg px-[2px]">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>Obs: Desconto para quem fechar junto com o convite</span>
          </li>

          <p className="my-2 text-black italic w-[90%]  md:w-[50%]">
            Imagem ilustrativa. Criamos qualquer tema.
          </p>
          <div className="flex gap-3 my-1 mx-2">
            <Link
              href={
                'https://drive.google.com/file/d/1muDtN18jg3Tu_yWu1zcuBASLZsfP9qnU/view?usp=sharing'
              }
              className="p-1 text-center  flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
            >
              Ver modelo
            </Link>
            <Link
              href={
                'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para'
              }
              className=":p-1 text-center flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
            >
              Fazer pedido
            </Link>
          </div>

          <div className="flex">
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/personalizado.png" alt="" width={150} height={100} />
              <span className="absolute bottom-9 md:bottom-9 text-lg md:text-2xl ml-2 font-bold">
                R$ 20,00
              </span>
            </div>
          </div>
        </ul>
      </div>

      <div className=" w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-contain"></div>
    </section>
  )
}
