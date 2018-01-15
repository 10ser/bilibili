import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import http from 'axios'
// import state from './state'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

const state = {
  // 当前用户
  phoneInfo: {},
  loginbol: false
}

const actions = {
  register ({commit}, user, psd) {
    let url = api.host + 'users?phone=' + user
    return http.get(url)
      .then(res => {
        if (!(res.data.length > 0)) {
          let url = api.host + 'users'
          let userObj = {
            phone: user,
            userpsd: psd
          }
          return http.post(url, userObj)
            .then(res => {
              commit('LOGIN', res.data)
              return '注册成功'
            })
        } else {
          return '该用户已存在，注册失败'
        }
      })
  },
  login ({commit}, user, psd) {
    let url = api.host + 'users?phone=' + user
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          // 用户已存在
          let data = res.data[0]
          console.log(data)
          if (data.userpsd === psd) {
            commit('LOGIN', data)
            return '该用户存在'
          }
          return '该用户不存在'
        } else {
          // 无此用户
          return '该用户不存在'
        }
      })
  }
}

const mutations = {
  LOGIN (state, data) {
    state.phoneInfo = data
    state.loginbol = true
  }
}

const getters = {
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
