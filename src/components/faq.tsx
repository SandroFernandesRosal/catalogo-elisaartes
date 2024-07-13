'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: string[] = [
    'Pra quem é o curso?',
    'Por onde vou acessar o curso?',
    'O acesso é vitalício?',
    'Como são as aulas?',

    'Quais são as formas de pagamento?',

    'Como ter acesso aos bônus?',
    'Como funciona a garantia de 7 dias?',
    'Tem suporte ?',
  ]

  const faqAnswers: string[] = [
    'O curso é para todos que querem usar o instagram para empreender e conquistar sua independência financeira',
    'O curso é dentro da plataforma da Kiwify. Após preencher seus dados e finalizar a compra, você receberá um email da plataforma com seu login de acesso.',
    'Sim, você terá acesso para sempre.',
    'Aulas gravadas em vídeos e alguns bônus em pdf. Para você estudar no seu tempo.',

    'Pagamentos poderão ser feitos por Pix, Cartão de crédito ou boleto bancário',

    'Os bônus serão liberados automaticamente após o sétimo dia da compra',
    'Dentro do prazo de 7 dias, você poderá solicitar o reembolso a qualquer momento dentro da plataforma da Kiwify.',
    'Oferecemos suporte por email: suporteartenegocio@gmail.com',
  ]

  return (
    <section className="z-10  flex flex-col items-center   py-5" id="faq">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Perguntas frequentes
      </h1>
      <div className="flex justify-center py-4">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <ul className="w-[80%] px-2 max-w-[400px] flex flex-col gap-3">
        {faqItems.map((item, index) => (
          <li key={index} onClick={() => handleOpen(index)} className="faq">
            <h1 className="bg-bgdarksecondary  h-20 items-center text-secondarypink rounded-md p-5 font-bold cursor-pointer flex justify-between">
              {`${index + 1} - ${item}`}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </h1>
            <div
              className={`p-1 border-x-[1px] rounded-md bg-bglightsecundary dark:bg-bgdarksecundary border-b-[1px] border-zinc-800  transition ease-in-out duration-300 delay-150 ${openIndex === index ? 'flex' : 'hidden'}`}
            >
              {faqAnswers[index]}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
