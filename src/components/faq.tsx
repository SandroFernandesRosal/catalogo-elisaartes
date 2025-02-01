'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: string[] = [
    'Modelo pronto',
    'Modelo personalizado',
    'Forma de pagamento',
    'Prazo de entrega',
    'Confirmação do pedido',
    'Alterações',
  ]

  const faqAnswers: string[] = [
    'Modelos que já temos em nosso portfólio, para alterar somente as informações do aniversáriante sem mudanças na arte.',
    'Modelo criado do zero, baseado em inspirações como decoração, arquivos, identidade visual e etc...',
    'Trabalhamos com pagamento via pix e link de pagamento com cartão de crédito(com acréscimo).',
    'De 2 a 5 dias úteis para o envio da arte para aprovação (sem contar o dia da aquisição).',
    'O pedido é confirmado mediante pagamento de 50% do valor total ou valor integral.',

    'Em modelos prontos: o cliente poderá fazer até 3 alterações sem custo adicional, após será cobrado uma taxa de R$5 reais para alteração. Em modelos personalizados: o cliente poderá fazer até 5 alterações sem custo adicional, após será cobrado uma taxa de R$5 reais para alteração. O mesmo se o convite já estiver finalizado. ',
  ]

  return (
    <section
      className="z-10 bg-white  flex flex-col items-center   pt-5 bg-[url(/bgbottom.png)] bg-top bg-repeat-x md:bg-contain "
      id="faq"
    >
      <h1 className="text-5xl text-center font-Bad font-extrabold pt-16">
        Informações importantes
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
      <div className=" w-full bg-[url(/bgtop.png)] h-[100px] bg-bottom bg-repeat-x md:bg-cover"></div>
    </section>
  )
}
