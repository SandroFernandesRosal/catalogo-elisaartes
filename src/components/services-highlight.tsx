import { MonitorSmartphone, Clock3, FileText, Video } from 'lucide-react'

export default function ServiceHighLight() {
  return (
    <div className="flex w-full justify-center bottom-16  relative   z-20">
      <div className="flex justify-evenly text-white  w-[20%] max-w-[230px] h-[140px]  flex-col items-center text-center border-l-[1px] border-y-[1px] border-zinc-800  bg-bgdark rounded-l-md py-2  ">
        <MonitorSmartphone className="size-10 md:size-14" />
        <h1 className="text-lg font-bold ">Curso vitalício</h1>
      </div>

      <div className="flex justify-evenly  text-white w-[20%] max-w-[230px]  h-[140px]   flex-col items-center text-center border-[1px] border-zinc-800  bg-bgdark  py-2  ">
        <Video className="size-10 md:size-14" />
        <h1 className="text-lg font-bold">Aulas em vídeo</h1>
      </div>

      <div className="flex justify-evenly text-white w-[20%] max-w-[230px] h-[140px]   flex-col items-center text-center border-r-[1px] border-y-[1px] border-zinc-800 bg-bgdark  py-2  shadow-shadowlight dark:shadow-none ">
        <Clock3 className="size-10 md:size-14" />
        <h1 className="text-lg font-bold">Estude no seu tempo</h1>
      </div>

      <div className="flex justify-evenly text-white w-[20%] max-w-[230px] h-[140px]   flex-col items-center text-center border-r-[1px] border-y-[1px] border-zinc-800 bg-bgdark rounded-r-md py-2  shadow-shadowlight dark:shadow-none ">
        <FileText className="size-10 md:size-14" />
        <h1 className="text-lg font-bold">PDFs de apoio</h1>
      </div>
    </div>
  )
}
