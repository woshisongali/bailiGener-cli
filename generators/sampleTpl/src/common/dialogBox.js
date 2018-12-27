/**
 * Created by songali on 18/5/15.
 */
import '@wag/fe-dialog/index.css'
import Dialog from '@wag/fe-dialog'
const testbox = (msg, cb) => {
  let obj = {
    title: '提示',
    showHead: false,
    showCancel: false,
    msg: msg,
    confirmBtnText: '知道了',
    confirm () {
      if (cb) {
        cb()
      }
    }
  }
  /* eslint-disable new-cap */
  new Dialog.dialog(obj)
}
export default {
  testbox
}
