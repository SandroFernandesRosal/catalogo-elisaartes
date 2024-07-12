export default function Paymant() {
  return (
    <section className="flex flex-col justify-center gap-4 bg-bgdarksecondary py-5 items-center">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Conquiste sua independência financeira
      </h1>
      <div className="flex justify-center">
        <span className="border-b-4 w-24  border-secondarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <div className="flex flex-col gap-1 bg-bgdark w-[80%] max-w-[400px] rounded-md">
        <p className="text-center font-bold text-2xl">
          De R$ <s>127,97</s> por apenas R$ 19,97
        </p>
        <p className="text-center font-bold text-2xl">
          Compra com garantia de 7 dias
        </p>

        <p className="text-center font-bold text-2xl">
          Compra segura, pela plataforma kiwify
        </p>
      </div>
    </section>
  )
}
