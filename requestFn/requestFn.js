const app = getApp();
const baseURL = app.globalData.baseURL;
const FN = require('../publicFn/public');

const Request = (options) =>{
  return new Promise((resolve, reject) => {
    if(!options.loading) FN.Loading(1);
    wx.request({
      url: baseURL + options.url || '',
      data: options.data || {},
      method: options.method || 'POST',
      responseType:options.responseType || "",
      timeout:15000,
      success (res) {
        if(!options.loading) FN.LoadingOff();
        console.log(res)
        if(res.statusCode === 200){
          resolve(res.data);
        }else{
          FN.Toast(res.errMsg);
        }
      },
      fail (res) {
        FN.Toast("网络开小差了");
        reject(res)
      }
    })
  })
};

module.exports = {
  Request
};