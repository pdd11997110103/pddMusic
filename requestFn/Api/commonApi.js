const requestFn = require('../requestFn/requestFn');

const API = {
  banner:"/banner",//banner图
};

const HTTP = {
  /**
  * banner图
  * @param {number} type - 端类型 PC 0、 Android 1、  Ios 2、 Ipad 3
  */
  Banner(type){
    return requestFn.Request({
      url:API.banner,
      data:{
        type:type,
      },
    })
  }
}
module.exports = HTTP;