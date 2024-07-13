import { Check } from 'lucide-react'

export default function About() {
  return (
    <section className="relative py-10 bg-bgdark flex flex-col items-center gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        O que você vai aprender?
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <ul className="flex flex-wrap gap-4 px-2 justify-center text-xl md:text-2xl w-full">
        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] h-[360px] rounded-md flex flex-col p-2">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Módulo 1
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">A importancia dos stories</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Métricas dos stories</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Criando storie</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Alerta</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Dicas para gravar stories</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Storie em texto</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Frequência</span>
          </span>
        </li>

        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] h-[360px] rounded-md  flex flex-col p-2">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Módulo 2
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />{' '}
            <span className="flex-1">Caixinhas de perguntas</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />{' '}
            <span className="flex-1">Como usar testes</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Como usar o report</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Estratégia do presente</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Conteúdo por camada</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">
              Como usar depoimentos para vender mais
            </span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Novela nos stories</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />O que
            <span className="flex-1">postar nos stories</span>
          </span>
        </li>

        <li className="bg-bgdarksecondary w-[80%] max-w-[400px] h-[360px] rounded-md flex flex-col p-2 ">
          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Bônus 1
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Aula Bônus</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Ebook 30 ideias para stories</span>
          </span>

          <h1 className="flex justify-center text-3xl font-bold text-secondarypink">
            Bônus 2
          </h1>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">50 desafios para stories</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Ebook 100 ideias para o feed</span>
          </span>
          <span className="flex gap-2">
            <Check className="text-secondarypink flex-2" size={36} />
            <span className="flex-1">Ebook 100 ideias de reels</span>
          </span>
        </li>
      </ul>
    </section>
  )
}
