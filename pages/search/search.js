// pages/search/search.js
const app = getApp();
const wxRequestApi = require('../../requestFn/requestFn');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:null,
    searchList:[]
  },
  // 搜索的方法
  searchGo:function(e) {
    let value = e.detail.value
    let options = {
      url:`search?keywords=${value}`,
    }
    console.log(options)
    wxRequestApi.wxRequest(options).then(res=>{
      if(res.data.code === 200){
        getApp().globalData.searchValue = res.data.result.songs;
        this.setData({
          searchList:res.data.result.songs
        })
        console.log(app.globalData.searchValue)
      }else{
        wx.showToast({
          title: '网络开小差了',
          icon: 'warn',
          duration: 2000,
          mask:true,
        })
      }
    })
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