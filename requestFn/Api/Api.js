const requestFn = require('../requestFn');

const API = {
  banner:"/banner",//banner图
  login:"/login/cellphone",//登陆
  recommendMusic:"/personalized/newsong",//推荐新音乐
  circleIcon:"/homepage/dragon/ball",//首页圆形图标入口
  recommendSongList:"/personalized",//推荐歌单
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
  * 获取首页圆形图标入口列表
  */
 circleIcon(){
    return requestFn.Request({
      url:API.circleIcon
    })
  },
  /**
  * 获取首页推荐歌单
  * @param {number} limit - 取出数量, 默认为 30
  */
  recommendSongList(limit){
    return requestFn.Request({
      url:API.recommendSongList,
      data:{
        limit:limit
      }
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
  * 推荐新音乐
  * @param {number} limit - 取出数量, 默认为 10
  */
  recommendMusic(limit){
    return requestFn.Request({
      url:API.recommendMusic,
      data:{
        limit:limit
      },
    })
  },
}
module.exports = HTTP;