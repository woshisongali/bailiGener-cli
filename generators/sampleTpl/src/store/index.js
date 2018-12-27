import Vue from 'vue'
import Vuex from 'vuex'
import { module } from './module'
import Promise from 'es6-promise'
Promise.polyfill()
Vue.use(Vuex)
export default new Vuex.Store(module)
