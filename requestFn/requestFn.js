const app = getApp();
const baseURL = app.globalData.baseURL;
const FN = require('../publicFn/public');

const Request = (options) =>{
  let url = baseURL + options.url;
  return new Promise((resolve, reject) => {
    !options.notLoading && FN.Loading(1);
    wx.request({
      url: url.indexOf("?") > -1 ? `${url}&timestamp=${new Date().getTime()}` : `${url}?timestamp=${new Date().getTime()}`,
      data: options.data || {},
      method: options.method || 'post',
      responseType:options.responseType || "",
      timeout:15000,
      success (res) {
        !options.notLoading && FN.LoadingOff();
        console.log(res)
        if(res.statusCode === 200){
          resolve(res.data);
        }else{
          FN.Toast(res.errMsg);
        };
      },
      fail (res) {
        FN.Toast("网络开小差了");
        reject(res);
      }
    })
  })
};

module.exports = {
  Request
};