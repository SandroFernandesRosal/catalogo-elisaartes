export interface LembreteProps {
  id: number
  title: string
  subtitles: string[]
  info: string
  img: string
  button: string
  price: string
  priceTwo: string
}

export interface ConvitesArray {
  convites: LembreteProps[]
}
