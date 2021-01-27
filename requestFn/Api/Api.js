const requestFn = require('../requestFn');

const API = {
  banner:"/banner",//banner图
  login:"/login/cellphone",//登陆
  recommend:"/personalized/newsong",//推荐音乐
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
  },
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
  * 推荐新歌 取出数量 , 默认为 10
  */
  Recommend(){
    return requestFn.Request({
      url:API.recommend,
      data:{},
    })
  },
}
module.exports = HTTP;