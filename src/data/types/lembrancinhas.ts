export interface LembrancinhasProps {
  id: number
  title: string
  subtitles: string[]
  info: string
  img: string[]
  price: string
  priceTwo: string
}

export interface ConvitesArray {
  convites: LembrancinhasProps[]
}
