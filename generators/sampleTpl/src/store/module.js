/* eslint-disable no-unused-vars */
import {ajax} from '../common/ajax'
export const module = {
  state: {
    loading: false,
    test1: 'gg'
  },
  mutations: {
    testAdd: (state, data) => {
      state.test1 += data
    }
  },
  actions: {
    func1: ({commit, state, dispatch}) => {
    },
    getDealedData: ({commit, state, dispatch}, param) => {
      state.loading = true
      console.log('dispatch the func')
      /*
      ajax.getDealedList(commit, param, {succ: () => {
        state.loading = false
      },
        err: () => {
          state.loading = false
        }})
      */
    }
  },
  getters: {
    test1: state => {
      return state.test1
    }
  }
}
