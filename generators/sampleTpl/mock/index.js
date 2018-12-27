/**
 * Created by songali on 18/1/16.
 */
var express = require('express')
var bodyParser = require('body-parser');
var app = express()
module.exports = app
app.use(bodyParser.json());
app.get('/dealFunds', (req, res) => {
  res.json({
    "success": true, //请求是否成功
    "message": "", //--modify
    "code":"code1233",//--add
    "data": {
      "count": 51, //数据条数
      "pageSize": 10, //每页数据条数
      "page": 1, //当前页
      "totalPage": 5, //总页数
      "model": [{
        "payerCompany": "myq2", //买家付款单位
        "payAmount": 6000, //来账总金额
        "orderAmount": 6000, //订单总金额
        "operates": [{

          "operateType": "核销(转退款)",
          "amount": 10100
        }, {
          "operateType": "退款",
          "amount": 2229
        }
        ],
        "settlementFundList": [{ //来账信息
          "settlementFundId": 1283, //来账id
          "transferTime": "2017-04-23 23:31:06", //到账时间-- modify   1524737923211
          "amount": 60000, //来账金额
          "payerBankName": "中国银行", //付款银行
          "bankFundId": "2017042310120520210000000050240000101109", //网商银行流水号
          "payerCardNo": "104100000004" //付款账号
        }, {
          "settlementFundId": 1149013,
          "transferTime": "2017-05-04 23:28:58",
          "amount": 60000,
          "payerBankName": "中国银行",
          "bankFundId": "2017050410120520210000000050240000106772",
          "payerCardNo": "104100000004"
        }
        ],
        "orderList": [{ //订单信息
          "orderId": 7128682988604844, //订单id
          "amount": 10000 //订单金额
        }, {
          "orderId": 7128682988604845,
          "amount": 10000
        }
        ],
        "operateTime": "2017-05-15 09:56:14",
        "operators": "卖家核销"
      },
        {
          "payerCompany": "myq2", //买家付款单位
          "payAmount": 6000, //来账总金额
          "orderAmount": 6000, //订单总金额
          "operates": [{

            "operateType": "核销(转退款)",
            "dealAmount": 10100
          }, {
            "operateType": "退款",
            "dealAmount": 2229
          }
          ],
          "settlementFundList": [{ //来账信息
            "settlementFundId": 1283, //来账id
            "transferTime": "2017-04-23 23:31:06", //到账时间-- modify   1524737923211
            "amount": 60000, //来账金额
            "payerBankName": "中国银行", //付款银行
            "bankFundId": "2017042310120520210000000050240000101109", //网商银行流水号
            "payerCardNo": "104100000004" //付款账号
          }, {
            "settlementFundId": 1149013,
            "transferTime": "2017-05-04 23:28:58",
            "amount": 60000,
            "payerBankName": "中国银行",
            "bankFundId": "2017050410120520210000000050240000106772",
            "payerCardNo": "104100000004"
          }
          ],
          "orderList": [{ //订单信息
            "orderId": 7128682988604844, //订单id
            "amount": 10000 //订单金额
          }, {
            "orderId": 7128682988604845,
            "amount": 10000
          }
          ],
          "operateTime": "2017-05-15 09:56:14",
          "operators": "卖家核销"
        },
        {
          "payerCompany": null,
          "payAmount": null,
          "orderAmount": null,
          "operateTime": "2017-03-09 10:08:09",
          "operators": "系统自动处理",
          "operates": null,
          "settlementFundList": null,
          "orderList": null
        }
      ]
    }
  })
})
app.get('/subInfo', (req, res) => {
  res.json({
    "isSuccess": true,"messageId":"error"
  })
})
/*
app.get('/dealFunds', (req, res) => {
  res.json({
    "code": 1,
    "data": {
      "infos": {

      },
      "errorMessage": null,
      "model": [
        {
          "payerCompany": null,
          "payAmount": null,
          "orderAmount": null,
          "operateTime": "2017-03-09 10:08:09",
          "operators": "系统自动处理",
          "operates": null,
          "settlementFundList": null,
          "orderList": null
        }
      ],
      "count": 101,
      "pageSize": 10,
      "totalPage": 10,
      "page": 11,
      "code": "success",
      "success": true
    },
    "success": true,
    "message": "success"
  })
})
*/
app.get('/seller', (req, res) => {
  res.json({
    "msg": "success",
    "code": 1,
    "data": {
      "groupName": "网商银行",
      "accountName": "五矿网络科技有限公司",
      "accountNo": "8888888907282139"
    }
  })
})