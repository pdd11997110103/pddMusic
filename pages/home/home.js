// pages/home.js
const app = getApp()

Page({
  data: {
    onTopList:0,
    navScrollLeft:0,
    homeTopList:[
      {title:"推荐"},
      {title:"MV"}
    ],
    menuList:[
      {title:"推荐",url:"../../icon/tuijian.png"},
      {title:"歌单",url:"../../icon/gedan.png"},
      {title:"排行",url:"../../icon/paihang.png"},
      {title:"电台",url:"../../icon/diantai.png"},
      {title:"直播",url:"../../icon/zhibo.png"}
    ]
  },
  // 点击标题翻页
  pageFn: function(e) {
    this.setData({
      onTopList: e.currentTarget.dataset.index,
    })
  },
  // 翻页
  swiperChange: function (e) {
    this.setData({
      onTopList: e.detail.current,
    })
  },
  // 菜单
  menuFn: function(e) {
    wx.showToast({
      title: '敬请期待',
      duration: 1500,
      mask:true,
      icon: 'none'
    })
  },
  // 搜索
  searchFn: function(e) {
    wx.showToast({
      title: '敬请期待',
      duration: 1500,
      mask:true,
      icon: 'none'
    })
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onShow: function() {
    // Do something when page show.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onResize: function() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})