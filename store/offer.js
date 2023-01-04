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
      route: {
        link: '/blaty-z-kamienia',
        name: 'Blaty z kamienia',
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
      route: {
        link: '/nagrobki-podwojne',
        name: 'Nagrobki podwojne',
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
      route: {
        link: '/nagrobki-pojedyncze',
        name: 'Nagrobki pojedyńcze',
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
      route: {
        link: '/schody-z-kamienia',
        name: 'Schody z kamienia',
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
      route: {
        link: '/nagrobki-dzieciece',
        name: 'Nagrobki dziecięce',
      },
    },
  ],
})
export const getters = {
  getOffer(state) {
    return state.offerList
  },
}
