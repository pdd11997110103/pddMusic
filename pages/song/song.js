import  HTTP  from "../../requestFn/Api/Api";
const app = getApp();
const FN = require('../../publicFn/public');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerH:Number,
    bannerList:[],
    CircleIconList:[],
    recommendSongList:[],
    recommendMusicList:[],
  },
  // 跳转到搜索页
  toSearch(){
    wx.navigateTo({
      url: '../search/search'
    });
  },
  // 获取banner图
  getBanner(){
    let system = app.globalData.systemInfo.system;
    let type = 2;
    !system.indexOf("iOS") ? type = 1 : type = 2;
    HTTP.Banner(type)
    .then(res => {
      console.log(res.banners);
      this.setData({
        bannerList:res.banners
      });
    });
  },
  // 获取banner图高度
  imgHeight(e){
    let VW = app.globalData.systemInfo.windowWidth;
    var W = e.detail.width,
        H = e.detail.height, 
        ratio = VW / W;
    let height = H * ratio;
    this.setData({
      bannerH:height || 150
    });
  },
  // 获取圆形图标入口列表
  getCircleIcon(){
    HTTP.circleIcon()
    .then(res => {
      console.log(res.data)
      this.setData({
        CircleIconList:res.data
      })
    })
  },
  // 获取首页推荐歌单
  getRecommendSongList(){
    HTTP.recommendSongList(10)
    .then(res => {
      console.log(res.result)
      this.setData({
        recommendSongList:res.result.filter(this.filterLakh)
      })
    })
  },
  //过滤大于十万的数字 100000 => 10万
  filterLakh(obj) {
    if(obj){
      if(obj.playCount && obj.playCount.toString().length > 5){
        obj.playCount = obj.playCount.toString().slice(0, 2) + '万';
      };
      return obj;
    }else{
      return [];
    }
  },
  // 获取推荐新音乐
  getRecommendMusic(){
    HTTP.recommendMusic(12)
    .then(res => {
      console.log(res.result)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
    this.getCircleIcon();
    this.getRecommendSongList();
    // this.getRecommendMusic();
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