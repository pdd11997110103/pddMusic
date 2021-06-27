const requestFn = require('../requestFn');

const API = {
  login:"/login/cellphone", //登陆
  sendVcode: "/captcha/sent", // 发送验证码
  verifyVcode: "/captcha/verify" // 验证验证码
};

const HTTP = {
  /**
  * 登陆
  * @param {number} phone - 手机号码
  * @param {number} password - 密码
  */
  Login(phone, password){
    return requestFn.Request({
      url:API.login,
      data:{
        phone:phone,
        password:password
      },
    })
  },
  /**
  * 发送验证码
  * @param {number} phone - 手机号码
  */
  sendVcode(phone){
    return requestFn.Request({
      url:API.sendVcode,
      data:{
        phone:phone
      },
    })
  },
  /**
  * 验证验证码
  * @param {number} phone - 手机号码
  * @param {number} captcha - 验证码
  */
  verifyVcode(phone, captcha){
    return requestFn.Request({
      url:API.verifyVcode,
      data:{
        phone:phone,
        captcha:captcha
      },
    })
  }
}
module.exports = HTTP;