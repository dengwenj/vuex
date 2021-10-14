import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
import axios from 'axios'

Vue.use(Vuex)

// 存储状态
const state = {
  n: 0,
  friend: [{ id: '001', name: 'jiejie' }],
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

  addFriend(context, name) {
    const p = { id: nanoid(), name }
    context.commit('ADDFRIEND', p)
  },

  wei(context, name) {
    if (name.includes('维')) {
      context.commit('WEI', { id: nanoid(), name })
    } else {
      alert('请添加一个名字有“维”字的人')
    }
  },

  async randomAddFriend(context) {
    const {
      data: { result: name },
    } = await axios.get('https://api.apiopen.top/recommendPoetry')
    context.commit('RANDOMADDFRIEND', { id: nanoid(), name })
  },
}

const mutations = {
  JIA(state, value) {
    state.n += value * 1
  },

  JIAN(state, value) {
    state.n -= value * 1
  },

  ADDFRIEND(state, value) {
    state.friend.push(value)
  },

  WEI(state, vlaue) {
    state.friend.push(vlaue)
  },

  RANDOMADDFRIEND(state, value) {
    state.friend.push(value)
  },
}

// 类似于计算属性
const getters = {
  multiple10(state) {
    // 让当前求个增加10倍
    return state.n * 10
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // modules,
})
