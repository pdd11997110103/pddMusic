import  HTTP  from "../../requestFn/Api/Api";
const app = getApp();
const FN = require('../../publicFn/public');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:true,
    userInfo:null,//用户信息
    bannerH:Number,//banner图高度
    bannerList:[],//banner图
    CircleIconList:[],//圆形图标入口
    recommendSongList:[],//推荐歌单
    recommendMusicList:[],//推荐音乐
    rankingList:[],//排行榜
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
      this.setData({
        CircleIconList:res.data
      })
    })
  },
  // 获取首页推荐歌单
  getRecommendSongList(){
    HTTP.recommendSongList(10)
    .then(res => {
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
      let arr = [];
      let obj = [];
      res.result.forEach((item,i) =>{
        arr.push(item);
        if((i + 1) % 3 === 0){
          obj.push(arr);
          arr = [];
        };
      });
      this.setData({
        recommendMusicList:obj
      });
    })
  },
  // 获取所有榜单摘要
  getRankingBrief(){
    HTTP.rankingBrief()
    .then(res => {
      let obj = res.list.filter((item)=>{
        return item.tracks.length > 0
      });
      this.setData({
        rankingList:obj
      })
    })
  },
  // 回到顶部
  returnTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    });
  },
  // 去登录
  toLogin(){
    wx.navigateTo({
      url:"/pages/login/login"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
    this.getCircleIcon();
    this.getRecommendSongList();
    this.getRecommendMusic();
    this.getRankingBrief();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      userInfo:app.globalData.userInfo || null
    });
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