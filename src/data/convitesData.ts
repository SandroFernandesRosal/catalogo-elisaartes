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
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/tradicional.webp'],
    poster: false,
    button:
      'https://drive.google.com/file/d/1eKg7Kx5GB30hKRzP3_1gaTk8ThP19zL-/view?usp=sharing ',
    priceone: 'R$ 15,00 ',
    pricetwo: 'R$ 25,00',
    video: false,
  },

  {
    id: 2,
    title: 'Modelo interativo 3 botões',
    subtitles: [
      'Enviado em PDF.',
      'Botões clicáveis de confirmação de presença (pelo whatsapp), localização e sugestão de presente.',
      'Obs: Também fazemos confirmação de presença por formulário de Google (adicional de R$10,00).',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/interativo3.webp'],
    poster: false,
    button:
      'https://drive.google.com/file/d/1GEkAfpMjifWucLGV0yt0SRwOVTmYOmuR/view',
    priceone: 'R$ 30,00 ',
    pricetwo: 'R$ 40,00',
    video: false,
  },

  {
    id: 3,
    title: 'Modelo infinito',
    subtitles: [
      'Enviado em PDF.',
      'Modelo de página longa.',
      'Sugestão de presente na própria página.',
      'Botões clicáveis de confirmação de presença e localização.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    poster: '/posterinfinito.webp',
    button:
      'https://drive.google.com/file/d/17GBdWFEZ0S3flcRy-88oT2ZpiimTMlur/view',
    priceone: 'R$ 40,00 ',
    pricetwo: 'R$ 50,00',
    video: '/infinito.mp4',
  },

  {
    id: 4,
    title: 'Modelo animado gif',
    subtitles: [
      'Enviado em formato MP4 (vídeo).',
      'Contém música e animações.',

      'Tela única.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    poster: '/posteranimadogif.webp',
    button:
      'https://drive.google.com/file/d/16oA2p0OteNe6yE4SMwbd2Kf0nc1MKjbT/view',
    priceone: 'R$ 25,00 ',
    pricetwo: 'R$ 35,00',
    video: '/animadogif.mp4',
  },
  {
    id: 5,
    title: 'Modelo animado história',
    subtitles: [
      'Enviado em formato MP4 (vídeo).',
      'Contém música e animações.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    poster: '/posteranimadohistoria.webp',
    button:
      'https://drive.google.com/file/d/1Pdxa_N3r1PlSqEWHYRtTxnFRD0mFj_Wh/view',
    priceone: 'R$ 35,00 ',
    pricetwo: 'R$ 45,00',
    video: '/animadohistoria.mp4',
  },
  {
    id: 6,
    title: 'Modelo interativo animado',
    subtitles: [
      'União do convite interativo com convite animado.',
      'Enviado em PDF.',
      'Ao tocar no envelope abre o convite em Vídeo.',
      'Contém música, animações e os botoões clicaveis de confirmação de presença, localização e sugestão de presente.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/interativoanimado2.webp', '/interativoanimado1.webp'],
    poster: '/posteranimadohistoria.webp',
    button:
      'https://drive.google.com/file/d/16cLdnNgm1wvIy4ahvOLHtDyIGJeK2yeI/view',
    priceone: 'R$ 60,00 ',
    pricetwo: 'R$ 70,00',
    video: '/animadohistoria.mp4',
  },
]
