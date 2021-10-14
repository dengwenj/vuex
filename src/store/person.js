import { nanoid } from 'nanoid'
import axios from 'axios'

const person = {
  namespaced: true,
  state: {
    friend: [{ id: '001', name: 'jiejie' }],
  },
  mutations: {
    ADDFRIEND(state, value) {
      state.friend.push(value)
    },

    WEI(state, vlaue) {
      state.friend.push(vlaue)
    },

    RANDOMADDFRIEND(state, value) {
      state.friend.push(value)
    },
  },
  actions: {
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
  },
}
export default person
