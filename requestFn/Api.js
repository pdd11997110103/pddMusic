const requestFn = require('../requestFn/requestFn');

const API = {
  getCode:"/getRandomPicture.app",
  login:"/web/live/login/login.am",
};

const HTTP = {
  /**
  * 获取验证码
  * @param {number} number - 随机数
  */
  getCode(number){
    return requestFn.Request({
      url:API.getCode,
      data:{
        number:number,
      },
      responseType:'arraybuffer'
    })
  },
}
module.exports = { HTTP }