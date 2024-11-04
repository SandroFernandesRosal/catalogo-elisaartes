import Image from 'next/image'

export default function Filtro() {
  return (
    <section className="py-5 bg-white flex flex-col items-center gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Filtro para instagram
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-textdark  text-3xl mb-5"></span>
      </div>

      <div className="bg-white w-full flex  justify-evenly md:justify-center md:gap-10">
        <Image
          src={'/mockupfiltro.png'}
          width={309}
          height={510}
          alt=""
          className="w-[40%] max-w-[309px]"
        />
        <Image
          src={'/qrcode.png'}
          width={309}
          height={510}
          alt=""
          className="w-[40%] max-w-[309px]"
        />
      </div>
    </section>
  )
}
