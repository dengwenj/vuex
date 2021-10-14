const count = {
  namespaced: true,
  state: {
    n: 0,
  },
  mutations: {
    JIA(state, value) {
      state.n += value * 1
    },

    JIAN(state, value) {
      state.n -= value * 1
    },
  },
  actions: {
    incrementOdd(context, value) {
      if (context.state.n % 2 !== 0) {
        context.commit('JIA', value)
      }
    },

    incrementAsync(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 1000)
    },
  },
  getters: {
    multiple10(state) {
      // 让当前求个增加10倍
      return state.n * 10
    },
  },
}
export default count
