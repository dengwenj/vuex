export default {
  namespaced: true,
  state: {
    a: 123
  },
  mutations: {},
  actions: {},
  getters: {
    get(state) {
      return state.a + '......'
    }
  }
}