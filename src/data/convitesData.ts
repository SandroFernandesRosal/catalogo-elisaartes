import { ConvitesProps } from './types/convites'

export const convitesData: ConvitesProps[] = [
  {
    id: 1,
    title: 'Modelo tradicional',
    subtitles: [
      'Enviado em PNG(imagem).',
      'Pode ser impresso.',
      'Sem música ou animação.',
    ],
    info: 'Imagem ilustrativa. Temos diversos temas.',
    img: ['/tradicional.webp'],
    poster: false,
    button:
      'https://drive.google.com/file/d/1eKg7Kx5GB30hKRzP3_1gaTk8ThP19zL-/view?usp=sharing ',
    priceone: 'R$ 20,00 ',
    pricetwo: 'R$ 25,00',
    video: false,
  },

  {
    id: 2,
    title: 'Modelo interativo 3 botões',
    subtitles: [
      'Enviado em PDF.',
      'Botões clicáveis de confirmação de presença (pelo whatsapp), localização e sugestão de presente.',
      'Obs.: Também fazemos confirmação de presença por formulário do Google (adicional de R$10,00).',
    ],
    info: 'Imagem ilustrativa. Temos diversos temas.',
    img: ['/interativo3.webp'],
    poster: false,
    button:
      'https://drive.google.com/file/d/1GEkAfpMjifWucLGV0yt0SRwOVTmYOmuR/view',
    priceone: 'R$ 35,00 ',
    pricetwo: 'R$ 40,00',
    video: false,
  },

  {
    id: 3,
    title: 'Modelo animado história',
    subtitles: [
      'Enviado em formato MP4 (vídeo).',
      'Contém música e animações.',
    ],
    info: 'Imagem ilustrativa. Temos diversos temas.',
    img: false,
    poster: '/interativoanimado1.jpeg',
    button:
      'https://player.cloudinary.com/embed/?cloud_name=dbajofc9q&public_id=Rei_le%C3%A3o_cp_pa9bjc',
    priceone: 'R$ 45,00 ',
    pricetwo: 'R$ 45,00',
    video: '/animadohistoria.mp4',
  },
  {
    id: 4,
    title: 'Modelo interativo animado',
    subtitles: [
      'União do convite interativo com convite animado.',
      'Enviado em formato de site (Link).',
      'Ao tocar no envelope abre o convite em Vídeo.',
      'Contém música, animações e os botoões clicaveis de confirmação de presença, localização e sugestão de presente.',
    ],
    info: 'Imagem ilustrativa. Temos diversos temas.',
    img: ['/interativoanimado1.png', '/interativoanimado2.png'],
    poster: '/interativoanimado1.jpeg',
    button:
      'https://convites.elisaartesdigitais.com.br/modelo-interativo-animado',
    priceone: 'R$ 70,00 ',
    pricetwo: 'R$ 70,00',
    video: '/animadohistoria.mp4',
  },
]
