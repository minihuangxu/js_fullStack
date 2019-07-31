import Vue from 'vue'
import vuex from 'vuex'

import trip from './module/trip'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    trip
  }
})