import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 存储状态
const state = {
  n: 0,
}

const actions = {
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
}

const mutations = {
  JIA(state, value) {
    state.n += value * 1
  },
  JIAN(state, value) {
    state.n -= value * 1
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
