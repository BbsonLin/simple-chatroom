import Vue from 'vue'
import Vuex from 'vuex'
import chatroom from './modules/chatroom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chatroom
  }
})
