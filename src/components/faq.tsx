'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: string[] = [
    'Qual a forma de pagamento?',
    'Qual o prazo de envio?',
    'Como fazer o pedido?',
    'Alterações',
  ]

  const faqAnswers: React.ReactNode[] = [
    <>
      <p>
        Trabalhamos com pagamento via pix e cartão por link de pagamento (com
        acréscimo).
      </p>
    </>,
    <>
      <p className="mb-2">
        <span className="font-bold">Modelo pronto</span>: De 2 a 4 dias úteis
        (sem contar com o dia da aquisição).
      </p>
    </>,
    <>
      <p>
        Envie uma mensagem no WhatsApp informando o tema e o modelo. Fazemos em
        todos os modelos acima.
      </p>
    </>,
    <>
      <p className="mb-2">
        O cliente terá direito a até três (3) alterações sem custo durante o
        processo de aprovação do convite. A partir da quarta alteração, será
        cobrada uma taxa adicional de R$ 5,00 por modificação. Caso o convite já
        esteja finalizado, qualquer solicitação de alteração posterior também
        estará sujeita à taxa de R$ 5,00 por ajuste.
      </p>
    </>,
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
              className={`p-1 border-x-[1px] rounded-md bg-bglightsecundary dark:bg-bgdarksecundary border-b-[1px] border-none text-textlight transition ease-in-out duration-300 delay-150 ${openIndex === index ? 'flex flex-col ' : 'hidden'}`}
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
