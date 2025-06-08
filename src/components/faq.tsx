'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: string[] = [
    'Qual a diferença entre modelos prontos e personalizados?',
    'Qual a forma de pagamento?',
    'Qual o prazo de envio?',
    'Como fazer o pedido?',
    'Alterações',
  ]

  const faqAnswers: string[] = [
    'Modelos prontos são os que já temos a arte feita, para alterar somente as informações do aniversariante. Não alteramos o design; Modelos personalizados são modelos criados do zero, baseado em referências como decoração, lembrancinhas, identidade visual, etc.',

    'Trabalhamos com pagamento via pix e cartão por link de pagamento(com acréscimo).',
    'Modelo pronto: 2 dias úteis (sem contar com dia da aquisição). Modelo personalizado: 5 dias úteis, (sem contar com dia da aquisição).',
    'Envie uma mensagem no whatsapp informando o tema e o modelo, fazemos em todos os modelos acima.',
    'Em modelo pronto: Não alteramos o design, porém o cliente poderá fazer até 3 alterações sem custo adicional, como mudar o endereço, horário e etc. Em modelo personalizado: o cliente poderá fazer até 5 alterações sem custo adicional. Caso o cliente queira alterar algo mais após ter excedido o número de alterações, terá uma taxa de R$5,00. Se o pedido já estiver finalizado, terá uma taxa de R$5,00 para alteração.',
  ]

  return (
    <section
      className="z-10 bg-white  flex flex-col items-center   pt-5 bg-[url(/bgbottom.webp)] bg-top bg-repeat-x md:bg-contain "
      id="faq"
    >
      <h1 className="text-5xl text-center font-Bad font-extrabold pt-16">
        Perguntas Frequentes
      </h1>
      <div className="flex justify-center py-4">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-secondarypink  text-3xl mb-5"></span>
      </div>

      <ul className="w-[80%] px-2 max-w-[400px] flex flex-col gap-3">
        {faqItems.map((item, index) => (
          <li key={index} onClick={() => handleOpen(index)} className="faq">
            <h1 className="bg-bgpink  h-20 items-center text-secondarypink rounded-md p-5 font-bold cursor-pointer flex justify-between">
              {`${index + 1} - ${item}`}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </h1>
            <div
              className={`p-1 border-x-[1px] rounded-md bg-bglightsecundary dark:bg-bgdarksecundary border-b-[1px] border-none text-textlight transition ease-in-out duration-300 delay-150 ${openIndex === index ? 'flex' : 'hidden'}`}
            >
              {faqAnswers[index]}
            </div>
          </li>
        ))}
      </ul>
      <div className=" w-full bg-[url(/bgtop.webp)] h-[100px] bg-bottom bg-repeat-x md:bg-cover"></div>
    </section>
  )
}
