import  HTTP  from "../../requestFn/Api/Api"
import  FN  from "../../publicFn/public"

Page({
  data: {
    
  },
  // 去搜索
  toSearch (e) {
    wx.navigateTo({
      url: "../search/search"
    });
  },
  // 获取banner图
  getBanner () {
    HTTP.Banner(2)
    .then(res => {
      console.log(res)
    })
  },
  //推荐
  Recommend () {
    HTTP.Recommend()
    .then(res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
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