/**
 * Created by songali on 18/5/14.
 */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { htmlUrl } from './config'

const getDealedList = (commit, preParam, cbObj) => {
  let params = {}
  params.startTime = preParam.startTime
  params.endTime = preParam.endTime
  params.payerCompany = preParam.payerCompany
  params.page = preParam.pageNo
  params.pageSize = 10
  let url = htmlUrl.dealedList
  axios.get(url, {params: params}).then((resp) => {
    console.log(resp.data)
    commit('initData', resp.data.data)
    if (cbObj) {
      cbObj.succ()
    }
  }).catch((err) => {
    console.log(err)
    if (cbObj) {
      cbObj.err()
    }
  })
}

export const ajax = {
  getDealedList
}
