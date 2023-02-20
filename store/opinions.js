export const state = () => ({
  opinionList: [
    {
      id: 0,
      name: 'Anna Nowak',
      content:
        'Kompleksowa obsługa, profesjonalne doradzwo i pomoc przy doborze materiałów. Polecam współpracę z tą firmą.',
      stars: 5,
    },
    {
      id: 1,
      name: 'Danuta Sabat',
      content:
        'Sprawna realizacja zamówienia i profesjonalna obsługa, to jest to czego potrzebowałam w tej trudnej chwili.',
      stars: 5,
    },
  ],
})

export const getters = {
  getOpinions(state) {
    return state.opinionList
  },
}
