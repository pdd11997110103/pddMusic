import  HTTP  from "../../requestFn/Api/Api";
const app = getApp();
const FN = require('../../publicFn/public');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isModel:1,//登陆模式 false 账号密码 true 短信登陆
    isLook:false,//密码是否可见
    userName:"",//用户名或手机号
    iphone:"",//手机号
    passWord:"",//密码
    Vcode:"",//验证码
    second:0,//剩余秒数
    hint:"",//错误提示语
    isHint:false,//是否显示错误提示语
  },
  // 去注册
  goSignIn () {
    FN.Toast("敬请期待");
    return false;
    wx.navigateTo({
      url:"../signIn/signIn?model=0"
    })
  },
  // 忘记密码
  forgetPwd () {
    FN.Toast("敬请期待");
    return false;
    wx.navigateTo({
      url:"../signIn/signIn?model=1"
    })
  },
  // 密码是否可见
  showPassword () {
    let bool = this.data.isLook;
    this.setData({
      isLook:!bool
    })
  },
  // 清空手机号输入（账号密码登陆）
  closeValue0 () {
    this.setData({
      userName:""
    })
  },
  // 清空密码输入（账号密码登陆）
  closeValue1 () {
    this.setData({
      passWord:""
    })
  },
  // 清空手机号输入（验证码登陆）
  closeValue2 () {
    this.setData({
      iphone:""
    })
  },
  // 获取账号
  getUserName (e) {
    this.setData({
      userName:e.detail.value.replace(/\s+/g, '')
    })
  },
  // 获取手机号
  getIphone (e) {
    let iphone = e.detail.value;
    this.setData({
      iphone:iphone.replace(/\s+/g, '')
    })
  },
  // 获取输入的验证码
  getVcode (e) {
    let Vcode = e.detail.value;
    this.setData({
      Vcode:Vcode.replace(/\s+/g, '')
    })
  },
  // 获取密码
  getPassword (e) {
    let passWord = e.detail.value;
    this.setData({
      passWord:passWord.replace(/\s+/g, '')
    })
  },
  // 切换登陆方式
  changeLoginFn () {
    let type = this.data.isModel;
    type === 1 ? type = 2 : type = 1;
    this.setData({
      isModel:type
    });
  },
  // 发送短信验证码
  sengVcode () {
    let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let iphone = this.data.iphone;
    if(!reg.test(iphone)){
      FN.Toast("手机号码格式有误");
      return false;
    }
    HTTP.sendVcode(iphone, 10)
    .then(res => {
      if(res.status === "y"){
        FN.Toast("验证码发送成功", 1);
        let num = 60;
        let time = setInterval(()=> {
          num--
          this.setData({
            second:num,
          });
          if(num === 0) clearInterval(time);
        },1000);
      }else{
        if(res.infoObject.isSuccess === "false"){
          FN.Alert("发送验证码频繁，请等等再试");
        }else{
          FN.Alert(res.info);
        }
      }
    });
  },
  // 登陆
  login () {
    let type = this.data.isModel;
    let userName,pwd,Vcode;
    if(type === 1){
      userName = this.data.userName;
      pwd = MD5.md5(this.data.passWord);
      Vcode = null;
    }else{
      userName = this.data.iphone;
      Vcode = this.data.Vcode;
      pwd = null;
    }
    HTTP.login(userName, pwd, type, Vcode)
    .then(res => {
      if(res.status === "y"){
        FN.Toast("登陆成功", 1);
        wx.setStorage({
          key:"userMsg",
          data:res.infoObject,
          success () {
            app.globalData.userMsg = res.infoObject;
            wx.reLaunch({
              url:"../classList/classList"
            });
          }
        });
      }else{
        FN.Toast(res.info);
      };
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})