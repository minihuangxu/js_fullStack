const user = {
  state: {
    token: null,
    avatar: 'https://wpimg.wallstcn.com/3fce7247-d863-4e3d-a0de-d30aaef7358a'
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    Login({commit}, token) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', token)
        resolve();
      })
    }
  }
}
export default user 