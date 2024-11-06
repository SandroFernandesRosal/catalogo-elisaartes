import Image from 'next/image'
import Link from 'next/link'

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

      <div className="flex flex-wrap justify-center md:justify-evenly w-full ">
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
        <ul className=" w-[50%] gap-2   items-center flex flex-col justify-around">
          <li className="font-bold w-[90%] text-textlight  md:w-[50%]  md:-w-[100]">
            * É um aviso antecipado para que os convidados não marquem outros
            compromissos para aquele dia.
          </li>
          <li className="font-bold w-[90%] text-textlight  md:w-[50%]  md:-w-[100]">
            * É enviado antes do convite
          </li>

          <li className="font-bold w-[90%] text-sm text-textlight  md:w-[50%]  md:-w-[100]">
            Obs: Desconto para quem fechar junto com o convite
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
