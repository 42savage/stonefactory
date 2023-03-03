export const state = () => ({
  opinionList: [
    {
      id: 0,
      name: 'Aleksandra Maziarz',
      content:
        'Serdecznie polecam, bardzo wysoka jakość, miły kontakt z klientem, szybko, sprawnie i bardzo dokładnie!',
      stars: 5,
    },
    {
      id: 1,
      name: 'Karol O',
      content:
        'Bardzo profesjonalnie świadczone usługi, dobry kontakt pracownika z klientem, a przede wszystkim solidnie i sprawnie wykonane zlecenie. Polecam!',
      stars: 5,
    },
    {
      id: 2,
      name: 'Natalia Dziok',
      content:
        'Firma godna polecenia, super obsługa, pełen profesjonalizm.  Serdecznie polecam!',
      stars: 5,
    },
  ],
})

export const getters = {
  getOpinions(state) {
    return state.opinionList
  },
}
