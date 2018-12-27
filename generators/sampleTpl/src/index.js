
import Vue from 'vue'
/* eslint-disable no-unused-vars */
import App from './App'
import store from './store/index'
// import VueTooltip from '@wag/vue-tooltip'
// import Popper from 'popper.js'

Vue.config.productionTip = false
// Vue.use(VueTooltip, {
//   Popper
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render (h) {
    return <App></App>
  }
})
