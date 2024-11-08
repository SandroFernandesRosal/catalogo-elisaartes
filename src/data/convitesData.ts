import { ConvitesProps } from './types/convites'

export const convitesData: ConvitesProps[] = [
  {
    id: 1,
    title: 'Convite tradicional',
    subtitles: [
      'Enviado em PNG(imagem).',
      'Pode adicionar foto(com acréscimo de 3 reais).',
      'Pode ser impresso.',
      'Sem música ou animação.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/tradicional.png'],
    button:
      'https://drive.google.com/file/d/1eKg7Kx5GB30hKRzP3_1gaTk8ThP19zL-/view?usp=sharing ',
    priceone: 'R$ 15,00 ',
    pricetwo: 'R$ 25,00',
    video: false,
  },

  {
    id: 2,
    title: 'Convite interativo 2 botões',
    subtitles: [
      'Enviado em PDF.',
      'Pode adicionar foto(acréscimo de 3 reais).',
      'ícones clicáveis de confirmação de presença e localização.',
      'Sem música ou animações.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/interativo2.png'],
    button:
      'https://drive.google.com/file/d/1SPgZ25yda1qLsKg8PXHJfwbJ3FFHUWRc/view',
    priceone: 'R$ 25,00 ',
    pricetwo: 'R$ 35,00',
    video: false,
  },

  {
    id: 3,
    title: 'Convite interativo 3 botões',
    subtitles: [
      'Enviado em PDF.',
      'Pode adicionar foto(acréscimo de 3 reais).',
      'Botões clicáveis de confirmação de presença e localização.',
      'Sugestão de presente.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/interativo3.png'],
    button:
      'https://drive.google.com/file/d/1GEkAfpMjifWucLGV0yt0SRwOVTmYOmuR/view',
    priceone: 'R$ 30,00 ',
    pricetwo: 'R$ 40,00',
    video: false,
  },

  {
    id: 4,
    title: 'Convite infinito',
    subtitles: [
      'Enviado em PDF.',
      'Pode adicionar foto(acréscimo de 3 reais).',
      'Modelo de página longa.',
      'Sugestão de presente na própria página.',
      'Botões clicáveis de confirmação de presença e localização.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    button:
      'https://drive.google.com/file/d/17GBdWFEZ0S3flcRy-88oT2ZpiimTMlur/view',
    priceone: 'R$ 40,00 ',
    pricetwo: 'R$ 50,00',
    video: '/infinito.mp4',
  },

  {
    id: 5,
    title: 'Convite animado clip',
    subtitles: [
      'Enviado em vídeo MP4.',
      'Pode adicionar foto(acréscimo de 3 reais).',
      'Contém música.',
      'Contém clip do tema(trecho do desenho/filme e etc... retirado do youtube).',
      'Tela única.',
    ],
    info: 'Imagem ilustrativa. Criamos diversos temas.',
    img: false,
    button:
      'https://drive.google.com/file/d/1t53AiPz-iNb6x8Vy4GW6LR5Cl45mJO5R/view',
    priceone: 'R$ 25,00 ',
    pricetwo: 'R$ 35,00',
    video: '/animadoclip.mp4',
  },
  {
    id: 6,
    title: 'Convite animado gif',
    subtitles: [
      'Enviado em vídeo MP4.',
      'Pode adicionar foto(acréscimo de 3 reais).',
      'Contém música.',
      'Pequenas animações.',
      'Tela única.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    button:
      'https://drive.google.com/file/d/16oA2p0OteNe6yE4SMwbd2Kf0nc1MKjbT/view',
    priceone: 'R$ 25,00 ',
    pricetwo: 'R$ 35,00',
    video: '/animadogif.mp4',
  },
  {
    id: 7,
    title: 'Convite animado história',
    subtitles: [
      'Enviado em vídeo MP4.',
      'Pode adiconar até 3 fotos, sem custos adicionais.',
      'Contém música.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: false,
    button:
      'https://drive.google.com/file/d/1Pdxa_N3r1PlSqEWHYRtTxnFRD0mFj_Wh/view',
    priceone: 'R$ 35,00 ',
    pricetwo: 'R$ 45,00',
    video: '/animadohistoria.mp4',
  },
  {
    id: 8,
    title: 'Convite interativo animado',
    subtitles: [
      'União do convite interativo com convite animado.',
      'Enviado em PDF.',
      'Ao tocar no envelope abre o convite em Vídeo.',
      'Com música e animações.',
      'É possível ser adicionado foto.',
    ],
    info: 'Imagem ilustrativa. Criamos qualquer tema.',
    img: ['/interativoanimado2.png', '/interativoanimado1.png'],
    button:
      'https://drive.google.com/file/d/16cLdnNgm1wvIy4ahvOLHtDyIGJeK2yeI/view',
    priceone: 'R$ 60,00 ',
    pricetwo: 'R$ 70,00',
    video: '/animadohistoria.mp4',
  },
]
