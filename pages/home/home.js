import  HTTP  from "../../requestFn/Api"
import  FN  from "../../publicFn/public"

Page({
  data: {
    anchor: {
      deviceHeight: 0,
      anchorTop: 0,
      anchorBottom: 0,
      anchorScreenBottom: 0
    },
    pageIndex:0,//swiper页码
    homeTopList:[
      {title:"推荐",id:0},
      {title:"MV",id:1}
    ],
    menuList:[
      {title:"发现",url:"../../icon/tuijian.png"},
      {title:"歌单",url:"../../icon/gedan.png"},
      {title:"排行",url:"../../icon/paihang.png"},
      {title:"电台",url:"../../icon/diantai.png"},
      {title:"直播",url:"../../icon/zhibo.png"}
    ]
  },
  // 点击标题翻页
  cilckPage (e) {
    this.setData({
      pageIndex: e.currentTarget.dataset.index,
    })
  },
  // swiper翻页
  swiperPage (e) {
    // this.computeSwiperHeight(e.detail.current);
    this.setData({
      pageIndex: e.detail.current,
    })
  },
  // 点击菜单
  clickMenu (e) {
    wx.showToast({
      title: '敬请期待',
      duration: 1500,
      mask:true,
      icon: 'none'
    })
  },
  // 去搜索
  toSearch (e) {
    wx.navigateTo({
      url: "../search/search"
    });
  },
  // Swiper高度计算
  computeSwiperHeight (Index) {
    let getSwiperHeight = () => {
      let min = this.data.anchor.anchorScreenBottom - this.data.anchor.anchorTop;
      let value = this.data.anchor.anchorBottom - this.data.anchor.anchorTop
      return Math.max(min, value)
    };
    wx.createSelectorQuery()
    .select('.anchor_screen_bottom')
    .boundingClientRect()
    .selectViewport()
    .scrollOffset()
    .exec(res => {
      this.data.anchor.anchorScreenBottom = res[0].bottom
    });
    wx.createSelectorQuery()
    .selectAll('.anchor_top')
    .boundingClientRect()
    .selectViewport()
    .scrollOffset()
    .exec(res => {
      this.data.anchor.anchorTop = res[0][Index].top
      this.setData({
        'anchor.deviceHeight': getSwiperHeight()
      })
    });
    wx.createSelectorQuery()
    .selectAll('.anchor_bottom')
    .boundingClientRect()
    .selectViewport()
    .scrollOffset()
    .exec(res => {
      this.data.anchor.anchorBottom = res[0][Index].bottom
      this.setData({
        'anchor.deviceHeight': getSwiperHeight()
      })
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
    // this.computeSwiperHeight(0);
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