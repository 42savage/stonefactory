export const state = () => ({
  offerList: [
    {
      id: 0,
      image: {
        src: require('~/assets/offer/image01.jpg'),
        alt: 'Zdjęcie przedstawia blat z kamienia',
      },
      title: 'Wysokiej jakości',
      name: 'Blaty z kamienia',
      content:
        'Blaty z kamienia są popularnym wyborem do kuchni ze względu na ich trwałość, elegancki wygląd i funkcjonalność. Charakteryzują się one odpornością na wysokie temperatury, wilgoć i ścieranie, co czyni je idealnymi do kuchni i łazienek.',
      route: {
        link: '/oferta/blaty-z-kamienia',
        name: 'blatów z kamienia',
      },
    },
    {
      id: 1,
      image: {
        src: require('~/assets/offer/image02.jpg'),
        alt: 'Zdjęcie przedstawia nagrobek podwójny',
      },
      title: 'Wysokiej jakości',
      name: 'Nagrobki podwójne',
      content:
        'Nagrobek z kamienia to trwały i elegancki wybór na pomnik grobowy. Nasz zakład kamieniarski oferuje szeroki wybór nagrobków z różnych kamieni, takich jak granit, marmur, kwarcyt i inne.',
      route: {
        link: '/oferta/nagrobki-podwojne',
        name: 'nagrobków podwójnych',
      },
    },
    {
      id: 2,
      image: {
        src: require('~/assets/offer/image03.jpg'),
        alt: 'Zdjęcie przedstawia nagrobek pojedyńczy',
      },
      title: 'Wytrzymujący lata',
      name: 'Nagrobki pojedyńcze',
      content:
        'Nagrobek z kamienia to trwały i elegancki wybór na pomnik grobowy. Nasz zakład kamieniarski oferuje szeroki wybór nagrobków z różnych kamieni, takich jak granit, marmur, kwarcyt i inne.',
      route: {
        link: '/oferta/nagrobki-pojedyncze',
        name: 'nagrobków pojedyńczych',
      },
    },
    {
      id: 3,
      image: {
        src: require('~/assets/offer/image04.jpg'),
        alt: 'Zdjęcie przedstawia schody z kamienia',
      },
      title: 'Schody z kamienia',
      name: 'Praktkyczne i eleganckie',
      content:
        'Schody z kamienia są popularnym wyborem do domów ze względu na ich trwałość, elegancki wygląd i funkcjonalność. Charakteryzują się one odpornością na ścieranie, uderzenia, wilgoć i zmiany temperatury, co czyni je idealnymi do użytku domowego.',
      route: {
        link: '/oferta/schody-z-kamienia',
        name: 'schodów z kamienia',
      },
    },
    {
      id: 4,
      image: {
        src: require('~/assets/offer/image05.jpg'),
        alt: 'Zdjęcie przedstawia nagrobek dziecięcy',
      },
      title: 'Marmurowe lub z lastryko',
      name: 'Nagrobki dziecięce',
      content:
        'Nagrobek dla dziecka to delikatny i subtelny wybór na pomnik grobowy. Nasz zakład kamieniarski oferuje szeroki wybór nagrobków dla dzieci, z różnych kamieni takich jak granit, marmur, kwarcyt i inne.',
      route: {
        link: '/oferta/nagrobki-dzieciece',
        name: 'nagrobków dziecięcych',
      },
    },
  ],
})
export const getters = {
  getOffer(state) {
    return state.offerList
  },
}
