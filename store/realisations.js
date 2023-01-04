export const state = () => ({
  chosenRealisations: 'blaty_z_kamienia',
  realisationList: [
    {
      id: 0,
      category: 'blaty_z_kamienia',
      alt: 'Zdjęcie przedstawiające blat z kamienia',
      src: require('~/assets/realisations/img01.jpg'),
    },
    {
      id: 1,
      category: 'blaty_z_kamienia',
      alt: 'Zdjęcie przedstawiające blat z kamienia',
      src: require('~/assets/realisations/img02.jpg'),
    },
    {
      id: 2,
      category: 'blaty_z_kamienia',
      alt: 'Zdjęcie przedstawiające blat z kamienia',
      src: require('~/assets/realisations/img03.jpg'),
    },
    {
      id: 3,
      category: 'blaty_z_kamienia',
      alt: 'Zdjęcie przedstawiające blat z kamienia',
      src: require('~/assets/realisations/img04.jpg'),
    },
  ],
})
export const mutations = {
  choseRealisationCategory(state, data) {
    state.chosenRealisations = data
  },
}
export const actions = {
  choseRealisationCategory({ commit }, payload) {
    commit('choseRealisationCategory', payload)
  },
}
export const getters = {
  getRealisations(state) {
    return state.realisationList.filter(
      (item) => item.category === state.chosenRealisations
    )
  },
}
