import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 存储状态
const state = {
  n: 0,
}

const actions = {
  increment(context, value) {
    context.commit('JIA', value)
  },
  decrement(context, value) {
    context.commit('JIAN', value)
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
