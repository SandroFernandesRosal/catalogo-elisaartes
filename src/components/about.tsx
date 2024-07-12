import { Check } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <section className="relative py-10 bg-bgdark flex flex-col items-center gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        O que você vai aprender?
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-secondarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <ul className="flex flex-wrap gap-4 px-2 justify-center text-xl md:text-2xl">
        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] rounded-md flex flex-col ">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Módulo 1
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />A importancia dos
            stories
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Métricas dos stories
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Criando storie
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Alerta
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Dicas para gravar stories
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Storie em texto
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Frequência
          </span>
        </li>

        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] rounded-md  flex flex-col ">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Módulo 2
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} /> Caxinhas de
            perguntas
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} /> Como usar testes
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Como usar o report
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Estratégia do presente
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Conteúdo por camada
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Como usar depoimentos para vender mais{' '}
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Novela nos stories
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />O que postar nos
            stories
          </span>
        </li>

        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] rounded-md flex flex-col ">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Bônus 1
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Aula Bônus
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Ebook 30 ideias para stories
          </span>
        </li>

        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] rounded-md">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Bônus 2
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            50 desafios para stories
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Ebook 100 ideias para o feed
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink" size={36} />
            Ebook 100 ideias de reels
          </span>
        </li>
      </ul>

      <Link
        href={'https://pay.kiwify.com.br/cyryVKs'}
        target="blank"
        className="cursor-pointer self-center bg-secondarypink p-2 px-4 rounded-md font-bold hover:bg-primarypink mt-5"
      >
        Quero me inscrever agora
      </Link>
    </section>
  )
}
