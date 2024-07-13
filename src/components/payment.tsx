import Image from 'next/image'
import garantia from '../../public/garantia.png'
import { Check } from 'lucide-react'
import ButtonPay from './button-pay'

export default function Paymant() {
  return (
    <section className="flex flex-col justify-center gap-4 bg-bgdarksecondary py-5 items-center px-2">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Conquiste sua independência financeira
      </h1>
      <div className="flex justify-center">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <div className="flex p-2 items-start flex-col gap-1 bg-bgdark w-[80%] max-w-[400px] rounded-md">
        <p className="flex justify-center w-full gap-2 text-primarypink font-bold text-2xl">
          De R$ <s>89,97</s> por R$ 19,97
        </p>
        <p className="flex justify-center w-full text-primarypink font-bold text-2xl pb-4">
          ou até 4x de R$ 5,37
        </p>
        <p className=" flex gap-2 font-bold text-2xl border-b-[1px] w-full border-zinc-800">
          <Check className="text-primarypink" size={36} /> Acesso vitalício ao
          curso
        </p>

        <p className=" flex gap-2 border-b-[1px] w-full border-zinc-800 font-bold text-2xl">
          <Check className="text-primarypink flex-2" size={36} />{' '}
          <span className="flex-1">Bônus liberado após o 7° dia</span>
        </p>

        <p className="flex gap-2 border-b-[1px] w-full border-zinc-800 font-bold text-2xl">
          <Check className="text-primarypink flex-2" size={36} />{' '}
          <span className="flex-1">Suporte para dúvidas</span>
        </p>

        <p className="flex gap-2 font-bold text-2xl border-b-[1px] w-full border-zinc-800">
          <Check className="text-primarypink flex-2" size={36} />{' '}
          <span className="flex-1">Compra segura</span>
        </p>

        <p className="flex gap-2 font-bold text-2xl border-b-[1px] w-full border-zinc-800">
          <Check className="text-primarypink flex-2" size={36} />{' '}
          <span className="flex-1">Acesso pela Kiwify</span>
        </p>

        <p className="flex gap-2 font-bold text-2xl">
          {' '}
          <Check className="text-primarypink flex-2" size={36} />{' '}
          <span className="flex-1">com garantia de 7 dias</span>
        </p>

        <div className="flex justify-center flex-col items-center gap-4 w-full py-2">
          <Image src={garantia} width={150} height={150} alt="garantia" />
          <ButtonPay name="Quero me inscrever agora" />
        </div>
      </div>
    </section>
  )
}
