import Vue from 'vue'
import Vuex from 'vuex'

import foo from "./module/foo"
import bar from "./module/bar"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foo,
    bar
  },
  state: {
    count: 10,
    message: 'hello',
    todos: [
      { id: 1, name: 'hh' },
      { id: 2, name: 'ee' },
      { id: 3, name: 'dd' },
      { id: 4, name: 'ww' }
    ]
  },
  mutations: {
    add(state, payload) {
      state.count += payload.num
    },
    hello(state, payload) {
      state.message = payload
    }
  },
  actions: {
    fenfa(context, { num = 1 }) {
      setTimeout(() => {
        context.commit({
          type: 'add',
          num
        })
      }, 1000);
    }
  },
  getters: {
    ming(state) {
      return state.todos.filter(item => {
        return item.id === 3
      }).length
    },
    hanshu(state) {
      return (id) => {
        return state.todos.find(item => item.id === id)
      }
    }
  }
})

export default store