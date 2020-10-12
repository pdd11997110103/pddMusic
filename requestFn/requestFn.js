// 请求封装
const app = getApp()
const pathUrl = app.globalData.url

function wxRequest(options) {
  return new Promise((resolve, reject) => {
    if(!options.loading){
      wx.showLoading({
        title: '加载中...',
      })
    }
    wx.request({
      url: pathUrl + options.url || '',
      data: options.data || {},
      method: options.method || 'post',
      header:options.header || {},
      // success: resolve,
      success: function (res) {    
        if(!options.loading){
          wx.hideLoading()
        }
        if (res.data.code=='1') {
          resolve(res);
        }else {//返回错误提示信息
          // wx.showToast({
          //   title: res.data.msg,
          //   icon:'none'
          // })
          resolve(res);
        }
      },
      fail: reject,
      complete() {
      }
    })
  })
}

module.exports = {
  wxRequest
}
