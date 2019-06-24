import api from '../../api'
import * as types from '../types'

const state = {
  showSidebar: false,
  fullScreen: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.SET_FULL_SCREEN] (state, status) {
    state.fullScreen = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  selectPlaySong ({commit}, status) {
    //let playList = state.playList.slice()
    commit(types.SET_FULL_SCREEN, status)
  },
  fullScreen ({commit}, status) {
    commit(types.SET_FULL_SCREEN, status)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  fullScreen: state => state.fullScreen
}

export default {
  state,
  mutations,
  actions,
  getters
}