export interface ConvitesProps {
  id: number
  title: string
  subtitles: string[]
  info: string
  img: string[] | false
  button: string
  priceone: string
  pricetwo: string
  video: string | false
}

export interface ConvitesArray {
  convites: ConvitesProps[]
}
