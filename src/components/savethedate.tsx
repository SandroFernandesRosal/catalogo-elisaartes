import Image from 'next/image'
import Link from 'next/link'
import { IoIosHeart } from 'react-icons/io'

export default function Savethedate() {
  return (
    <section className="bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain pt-14 bg-white flex flex-col items-center gap-4">
      <h1 className="text-5xl text-center font-Bad font-extrabold">
        Save the date
      </h1>
      <div className="flex">
        <span className="border-b-4 w-16  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-16  border-textdark  text-3xl mb-5"></span>
      </div>

      <div className="flex flex-wrap justify-center md:justify-evenly w-full flex-row-reverse ">
        {' '}
        <div className="bg-white flex  justify-center mb-5 w-[60%] md:w-[50%]">
          <Image
            src={'/savethedate.png'}
            width={500}
            height={500}
            quality={100}
            alt=""
            className="md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] border-[1px] border-zinc-300"
          />
        </div>
        <ul className="w-[50%] gap-2 items-center flex flex-col justify-around">
          <li className="flex items-center gap-2 w-[90%] text-textlight  md:w-[50%]  bg-bgdark rounded-lg px-[2px] p-1">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>
              É um aviso antecipado para que os convidados não marquem outros
              compromissos para aquele dia.
            </span>
          </li>
          <li className="flex items-center gap-2 w-[90%] text-textlight  md:w-[50%]  md:-w-[100] bg-bgdark rounded-lg px-[2px] p-1">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>É enviado antes do convite</span>
          </li>

          <li className="flex items-center gap-2 w-[90%] text-sm text-textlight  md:w-[50%]  md:-w-[100]bg-bgdark  bg-bgdark rounded-lg px-[2px] p-1">
            <IoIosHeart className="text-textdark min-w-[20px] justify-start" />
            <span>Obs: Desconto para quem fechar junto com o convite</span>
          </li>

          <p className="my-2 text-black italic w-[90%]  md:w-[50%]">
            Imagem ilustrativa. Criamos qualquer tema.
          </p>
          <div className="flex gap-3 my-1 mx-2">
            <Link
              href={
                'https://drive.google.com/file/d/1KDmzf82LmzaRuycVqUunvjWb7tB-6zIo/view'
              }
              className="p-1 text-center flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
              target="_blank"
            >
              Ver modelo
            </Link>
            <Link
              href={
                'https://api.whatsapp.com/send?phone=5521935006953&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20parasavethedate'
              }
              className=":p-1 text-center flex justify-center items-center  px-2 bg-textdark text-white rounded-lg hover:bg-primarypink/90"
              target="_blank"
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
