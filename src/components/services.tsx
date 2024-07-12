import ServiceHighLight from './services-highlight'

export default function Services() {
  return (
    <section className="relative pb-10 bg-bgdarksecondary flex flex-col items-center gap-4">
      <ServiceHighLight />
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Tenha um instagram de sucesso com...
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-secondarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <ul className="flex flex-wrap gap-4 px-2 justify-center text-xl md:text-2xl">
        <li className="bg-[url(../../public/moldura.png)] bg-cover w-40 h-40 md:w-52 md:h-52 flex flex-col justify-center items-center">
          <span>Curso</span>
          <span>em vídeo</span>
        </li>

        <li className="bg-[url(../../public/moldura.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52">
          <span>30 ideias</span>
          <span>para stories</span>
        </li>

        <li className="bg-[url(../../public/moldura.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52">
          <span>50 desafios</span>
          <span>para stories</span>
        </li>

        <li className="bg-[url(../../public/moldura.png)] bg-cover w-40 h-40 flex flex-col justify-center items-center md:w-52 md:h-52">
          <span>100 ideias</span>
          <span>para o feed</span>
        </li>
      </ul>
    </section>
  )
}
