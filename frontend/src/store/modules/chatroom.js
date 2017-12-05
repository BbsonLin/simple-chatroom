const state = {
  name: 'Some',
  messages: []
}

const getters = {
  getName: (state) => state.name,
  getMessages: (state) => state.messages
}

const actions = {
  saveMessage ({ commit }, msg) {
    commit('ADD_TO_MESSAGES', msg)
  },
  cleanMessages ({ commit }) {
    commit('CLEAN_MESSAGES')
  }
}

const mutations = {
  UPDATE_NAME (state, name) {
    state.name = name
  },
  ADD_TO_MESSAGES (state, msg) {
    state.messages.push(msg)
  },
  CLEAN_MESSAGES (state) {
    state.messages = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
