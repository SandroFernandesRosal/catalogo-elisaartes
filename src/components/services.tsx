export default function Services() {
  return (
    <section className="pb-28 mb-3 md:mb-7 bg-white flex flex-col items-center gap-4 bg-[url(/bgtop.webp)] bg-bottom bg-repeat-x  md:bg-contain">
      <h1 className="text-5xl text-center font-Bad font-bold">
        Nossos serviços
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-secondarypink text-3xl mb-5"></span>
      </div>

      <ul className="flex flex-wrap gap-4 px-2 justify-center text-xl md:text-2xl">
        <li className="w-44 bg-[url(/bgservice.webp)] bg-cover h-44 md:w-52 md:h-52 flex flex-col justify-center items-center text-center">
          <span className="px-5">Convites digitais</span>
          <span className="text-sm">(adulto e infantil)</span>
        </li>

        <li className=" bg-[url(/bgservice.webp)] bg-cover w-44 h-44 flex flex-col px-10 justify-center items-center md:w-52 md:h-52 text-center">
          <span>Moldura Sua vez</span>
        </li>

        <li className="bg-[url(/bgservice.webp)] bg-cover w-44 h-44 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5">Arte para</span>
          <span>lembranci</span>
          <span>nhas</span>
        </li>

        <li className="bg-[url(/bgservice.webp)] bg-cover w-44 h-44 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5 mx-2">Save the date</span>
        </li>

        <li className="bg-[url(/bgservice.webp)] bg-cover w-44 h-44 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5">Lembrete</span>
        </li>
      </ul>
    </section>
  )
}
