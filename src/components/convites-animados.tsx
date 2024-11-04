export default function ConvitesAnimados() {
  return (
    <section className="relative py-10 bg-bgdarksecondary flex flex-col items-center gap-4">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Convites animados
      </h1>
      <div className="flex">
        <span className="border-b-4 w-24  border-primarypink  text-3xl mb-5"></span>
        <span className="border-b-4 w-24  border-primaryblue  text-3xl mb-5"></span>
      </div>

      <div>
        <video
          width="310"
          height="800"
          poster=""
          preload="metadata"
          className=""
        >
          <source src="/bege.mp4" type="video/mp4" />
          <track
            src="/bege.mp4"
            kind="subtitles"
            srcLang="pt-br"
            label="Portuguese"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
