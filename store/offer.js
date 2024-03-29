export const state = () => ({
  currentPage: 'blaty-z-kamienia',
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
        alt: 'Zdjęcie przedstawia nagrobek pojedynczy',
      },
      title: 'Wytrzymujący lata',
      name: 'Nagrobki pojedyncze',
      content:
        'Nagrobek z kamienia to trwały i elegancki wybór na pomnik grobowy. Nasz zakład kamieniarski oferuje szeroki wybór nagrobków z różnych kamieni, takich jak granit, marmur, kwarcyt i inne.',
      route: {
        link: '/oferta/nagrobki-pojedyncze',
        name: 'nagrobków pojedynczych',
      },
    },
    {
      id: 3,
      image: {
        src: require('~/assets/offer/image04.jpg'),
        alt: 'Zdjęcie przedstawia schody z kamienia',
      },
      title: 'Schody z kamienia',
      name: 'Praktyczne i eleganckie',
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
  offerPages: [
    {
      id: 0,
      route: { link: 'blaty-z-kamienia', name: 'blatów z kamienia' },
      header: {
        title: 'Blaty z kamienia',
        content:
          'Blaty z kamienia to nie tylko funkcjonalne rozwiązanie, ale również elegancki dodatek do Twojego wnętrza. Dzięki swojej trwałości i odporności na uszkodzenia, blaty z kamienia są idealne do kuchni i łazienek, gdzie są narażone na codzienne użytkowanie.',
        quote:
          'Nie należy lekceważyć drobnostek, bo od nich zależy doskonałość',
        quoteAuthor: 'Michał Anioł',
        icons: [
          {
            id: 0,
            title: 'Trwałość',
            src: 'svg-hammer',
          },
          {
            id: 1,
            title: 'Elegancja',
            src: 'svg-landmark',
          },
          {
            id: 2,
            title: 'Łatwość w czyszczeniu',
            src: 'svg-wand',
          },
          {
            id: 3,
            title: 'Odporność na wysokie temperatury',
            src: 'svg-thermometer',
          },
        ],
        headerImage: {
          src: '/main_realisations/blaty/0.jpg',
          alt: 'Zdjęcie przedstawiające blat kuchenny wykonany z kamienia',
        },
      },

      section: {
        title: 'Dlaczego warto wybrać blat z kamienia?',
        content:
          'Powodów jest wiele. Po pierwsze blat kamienny nadaje Twojej kuchni elegancji, luksusu i nutę unikalności, ponieważ nie ma dwóch identycznych bloków granitu. Blaty z kamienia charakteryzują się odpornością na wysokie temperatury, są łatwe w czyszczeniu i co najważniejsze są trwałe.',
        bulletTitle: 'Zalety blatów kamiennych',
        bullets: [
          {
            id: 0,
            title: 'Trwałość: ',
            content:
              'Kamień jest jednym z najtrwalszych materiałów, które można wykorzystać do wykończenia kuchni. Blaty kamienne są odporne na wilgoć, plamy i zarysowania, co czyni je idealnym wyborem dla kuchni.',
          },
          {
            id: 1,
            title: 'Piękny wygląd: ',
            content:
              'Blaty kamienne dodają elegancji i szyku każdej kuchni, a różne rodzaje kamienia, takie jak granit, marmur i kwarc, oferują szeroką gamę kolorów i wzorów do wyboru.',
          },
          {
            id: 2,
            title: 'Łatwe w czyszczeniu: ',
            content:
              'Blaty kamienne są łatwe w czyszczeniu i utrzymaniu, a ich powierzchnia jest odporna na plamy i ślady po brudzie.',
          },
          {
            id: 3,
            title: 'Wszechstronność: ',
            content:
              'Blaty kamienne można łączyć z różnymi stylami wnętrz, od nowoczesnych do tradycyjnych, i są odpowiednie dla każdego rodzaju kuchni.',
          },
        ],
        sectionImage: '/main_realisations/blaty/1.jpg',
      },
    },

    {
      id: 1,
      route: { link: 'nagrobki-podwojne', name: 'nagrobków podwójnych' },
      header: {
        title: 'Nagrobki podwójne',
        content:
          'W życiu każdego z nas przychodzi moment, w którym musimy zastanowić się nad tym, jak chcemy uczcić pamięć naszych bliskich, którzy odeszli. Nagrobek podwójny jest wyjątkowym i trwałym sposobem na to, aby wiecznie przechować w naszych sercach wspomnienia i miłość do naszych bliskich.',
        quote: 'Popiołem i cieniem, i wspomnieniem się staniesz.',
        quoteAuthor: 'Persjusz',
        icons: [
          {
            id: 0,
            title: 'Trwałość',
            src: 'svg-hammer',
          },
          {
            id: 1,
            title: 'Elegancja',
            src: 'svg-landmark',
          },
          {
            id: 2,
            title: 'Łatwość w czyszczeniu',
            src: 'svg-wand',
          },
          {
            id: 3,
            title: 'Odporność na warunki atmosferyczne',
            src: 'svg-thermometer',
          },
        ],
        headerImage: {
          src: '/main_realisations/podwojne/1.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek podwójny.',
        },
      },

      section: {
        title: 'Dlaczego wybrać nagrobek podwójny?',
        content:
          'Nagrobek podwójny to pomnik, który ma stanowić wyraz więzi. Pomnik ten przeznaczony jest dla bliskich sobie osób. Pomieścić się w nim mogą cztery trumny. ',
        bulletTitle: 'Zalety nagrobków podwójnych',
        bullets: [
          {
            id: 0,
            title: 'Trwałość: ',
            content:
              'Materiały, których używamy do produkcji nagrobków podwójnych są najwyższej jakości, co sprawia, że są w stanie przetrwać lata.',
          },
          {
            id: 1,
            title: 'Piękny wygląd: ',
            content:
              'Wykonujemy nagrobki z granitu co sprawia, że są odporne na warunki atmosferyczne, są łatwe w czyszczeniu. Granit charakteryzuje się różnorodną kolorystyką, nie tylko czernią i szarością.',
          },
          {
            id: 2,
            title: 'Wielkość pomnika: ',
            content: 'Pozwala na umieszczenie od dwóch do czterech trumien',
          },
        ],
        sectionImage: '/main_realisations/podwojne/6.jpg',
      },
    },

    {
      id: 2,
      route: { link: 'nagrobki-pojedyncze', name: 'nagrobków pojedynczych' },
      header: {
        title: 'Nagrobki pojedyncze',
        content:
          'W życiu każdego z nas przychodzi moment, w którym musimy zastanowić się nad tym, jak chcemy uczcić pamięć naszych bliskich, którzy odeszli. Nagrobek pojedynczy jest wyjątkowym i trwałym sposobem na to, aby wiecznie przechować w naszych sercach wspomnienia i miłość do naszych bliskich.',
        quote: 'Popiołem i cieniem, i wspomnieniem się staniesz.',
        quoteAuthor: 'Persjusz',
        icons: [
          {
            id: 0,
            title: 'Trwałość',
            src: 'svg-hammer',
          },
          {
            id: 1,
            title: 'Elegancja',
            src: 'svg-landmark',
          },
          {
            id: 2,
            title: 'Łatwość w czyszczeniu',
            src: 'svg-wand',
          },
          {
            id: 3,
            title: 'Odporność na warunki atmosferyczne',
            src: 'svg-thermometer',
          },
        ],
        headerImage: {
          src: '/main_realisations/pojedyncze/1.jpg',
          alt: 'Zdjęcie przedstawiające nagrobek pojedynczy.',
        },
      },

      section: {
        title:
          'Dlaczego wybrać nagrobek pojedynczy w naszym zakładzie kamieniarskim?',
        content:
          'Nagrobki produkowane przez nasz zakład kamieniarski charakteryzują się wysoką jakością i wachlarzem wzorów. Gwarantujemy estetyczny wygląd i trwałość na lata.',
        bulletTitle: 'Zalety nagrobków pojedynczych',
        bullets: [
          {
            id: 0,
            title: 'Trwałość: ',
            content:
              'Materiały, których używamy do produkcji nagrobków podwójnych są najwyższej jakości, co sprawia, że są w stanie przetrwać lata.',
          },
          {
            id: 1,
            title: 'Piękny wygląd: ',
            content:
              'Wykonujemy nagrobki z granitu co sprawia, że są odporne na warunki atmosferyczne, są łatwe w czyszczeniu. Granit charakteryzuje się różnorodną kolorystyką, nie tylko czernią i szarością.',
          },
          {
            id: 2,
            title: 'Wachlarz wzorów: ',
            content:
              'Nie ograniczmy się do jednego czy dwóch wzorów. Produkujemy nagrobki zarówno w stylu nowoczesnym jak i klasycznym',
          },
        ],
        sectionImage: '/main_realisations/pojedyncze/56.jpg',
      },
    },

    {
      id: 3,
      route: { link: 'schody-z-kamienia', name: 'schodów z kamienia' },
      header: {
        title: 'Schody z kamienia',
        content:
          'Solidne i eleganckie schody z kamienia będą wspaniałą ozdobą każdego wnętrza. Nasze schody produkujemy z najwyższą starannością i dopasowaniem pod indywidualne potrzeby Klienta.',
        quote: 'Popiołem i cieniem, i wspomnieniem się staniesz.',
        quoteAuthor: 'Persjusz',
        icons: [
          {
            id: 0,
            title: 'Trwałość',
            src: 'svg-hammer',
          },
          {
            id: 1,
            title: 'Elegancja',
            src: 'svg-landmark',
          },
          {
            id: 2,
            title: 'Łatwość w czyszczeniu',
            src: 'svg-wand',
          },
          {
            id: 3,
            title: 'Odporność na warunki atmosferyczne',
            src: 'svg-thermometer',
          },
        ],
        headerImage: {
          src: '/main_realisations/schody/2.jpg',
          alt: 'Zdjęcie przedstawiające schody z kamienia.',
        },
      },

      section: {
        title: 'Dlaczego warto zdecydować się na schody z kamienia',
        content:
          'Schody z kamienia to inwestycja, która nadaje estetyki każdemu domu. Są trwałe, łatwe w konserwacji, a wachlarz możliwych wzorów nadaje unikalności.',
        bulletTitle: 'Zalety schodów z kamienia',
        bullets: [
          {
            id: 0,
            title: 'Trwałość: ',
            content:
              'Kamień jest jednym z najbardziej trwałych materiałów, co oznacza, że schody z kamienia będą służyć przez wiele lat.',
          },
          {
            id: 1,
            title: 'Łatwa konserwacja: ',
            content:
              'Schody z kamienia są łatwe w utrzymaniu i konserwacji, co oznacza, że będą wyglądać jak nowe przez wiele lat.',
          },
          {
            id: 2,
            title: 'Wachlarz wzorów: ',
            content:
              'Dostępne są różne rodzaje kamieni, takie jak marmur, granit i trawertyn, co pozwala na dopasowanie schodów do własnych upodobań i potrzeb.',
          },
        ],
        sectionImage: '/main_realisations/schody/6.jpeg',
      },
    },

    {
      id: 4,
      route: { link: 'nagrobki-dzieciece', name: 'nagrobków dziecięcych' },
      header: {
        title: 'Nagrobki dziecięce',
        content:
          'Śmierć dziecka to jedno z najtrudniejszych doświadczeń, jakie może przeżyć rodzina. Zostawienie po sobie tak młodej istoty jest ogromnym smutkiem i stratą dla bliskich. Nagrobek dla dziecka to symboliczne miejsce, w którym można oddać hołd i uczcić pamięć o nieżyjącym bliskim.',
        quote:
          'Pełno nas, a jakoby nikogo nie było. Jedną maluczką duszą tak wiele ubyło.',
        quoteAuthor: 'Jan Kochanowski',
        icons: [
          {
            id: 0,
            title: 'Trwałość',
            src: 'svg-hammer',
          },
          {
            id: 1,
            title: 'Elegancja',
            src: 'svg-landmark',
          },
          {
            id: 2,
            title: 'Łatwość w czyszczeniu',
            src: 'svg-wand',
          },
          {
            id: 3,
            title: 'Odporność na warunki atmosferyczne',
            src: 'svg-thermometer',
          },
        ],
        headerImage: {
          src: '/main_realisations/dzieciece/1.jpg',
          alt: 'Zdjęcie przedstawiające schody z kamienia.',
        },
      },

      section: {
        title: 'Jak dobrać nagrobek dla dziecka?',
        content:
          'Nagrobek dla dziecka powinien być przede wszystkim delikatny i subtelny. Zwykle wykonuje się go z jasnego kamienia lub marmuru, aby podkreślić niewinność i czystość dziecka. Dodatkowo, na nagrobku często umieszcza się motywy związane z dzieciństwem, takie jak motyle, ptaki czy kwiaty. Mogą one symbolizować piękno i ulotność życia.',
        bulletTitle: '',
        bullets: [
          {
            id: 0,
            title: '',
            content:
              'Na nagrobku dla dziecka warto umieścić również inskrypcję z imieniem i datą urodzenia oraz śmierci dziecka. Można dodać również sentencję, wiersz lub krótki tekst upamiętniający zmarłego. Warto zadbać o odpowiednią czcionkę i kolor napisu, aby było ono czytelne i estetyczne.',
          },
          {
            id: 1,
            title: '',
            content:
              'Nagrobek dla dziecka to ważne miejsce, które umożliwia bliskim zmarłego dziecka złożenie hołdu i uczczenie jego pamięci. Warto zadbać o to, aby był on wykonany zgodnie z indywidualnymi preferencjami rodziny oraz aby przede wszystkim oddawał charakter i osobowość zmarłego dziecka.',
          },
        ],
        sectionImage: '/main_realisations/dzieciece/2.jpg',
      },
    },
  ],
})
export const mutations = {
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
}
export const actions = {
  setCurrentPage({ commit }, payload) {
    commit('setCurrentPage', payload)
  },
}
export const getters = {
  getOffer(state) {
    return state.offerList
  },
  getCurrentOfferPage(state) {
    // return state.offerPages.filter((item) => item.route === state.currentPage)
    return state.offerPages.find(
      (item) => item.route.link === state.currentPage
    )
  },
}
