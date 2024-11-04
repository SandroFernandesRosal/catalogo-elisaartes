export default function Services() {
  return (
    <section className="py-10 bg-white flex flex-col items-center gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Trabalhamos com modelos prontos e personalizados.
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-text  text-3xl mb-5"></span>
      </div>

      <ul className="flex flex-wrap gap-4 px-2 justify-center text-xl md:text-2xl">
        <li className="w-40 bg-[url(/bgservice.png)] bg-cover h-40 md:w-52 md:h-52 flex flex-col justify-center items-center text-center">
          <span className="px-5">Convites digitais</span>
        </li>

        <li className=" bg-[url(/bgservice.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span>Filtros para instagram</span>
        </li>

        <li className="bg-[url(/bgservice.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5">Artes para lembrancinhas</span>
        </li>

        <li className="bg-[url(/bgservice.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5">Save the dates</span>
        </li>

        <li className="bg-[url(/bgservice.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52 text-center">
          <span className="px-5">Lembretes</span>
        </li>
      </ul>
    </section>
  )
}
