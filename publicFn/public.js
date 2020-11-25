const publicFn = {
  /**
  * Toast提示
  * @param {string} msg - 提示内容
  * @param {string} icon - icon图标 成功success 加载中loading 无样式none
  * @param {number} time - 提示存在时长
  */
  Toast (msg, icon, time){
    wx.showToast({
      title: msg,
      icon: icon || "none",
      duration: time || 1500
    })
  },
  /**
  * 带确认的提示框
  * @param {string} msg - 提示内容
  */
  Alert (msg){
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: '温馨提示',
        content: msg,
        showCancel:false,
        confirmColor:"#007AFF",
        success (res) {
          if (res.confirm) {
            resolve(res);
          }
        }
      })
    })
  },
  /**
  * 带确认和取消的提示框
  * @param {string} msg - 提示内容
  */
  Confirm (msg){
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: '温馨提示',
        content: msg,
        cancelColor:"007AFF",
        confirmColor:"#007AFF",
        success (res) {
          if (res.confirm) {
            resolve(res);
          }else if (res.cancel) {
            reject(res)
          }
        }
      })
    })
  },
}

module.exports = publicFn;