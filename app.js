App({
  onLaunch: function () {
    let _this = this;
    _this.globalData.systemInfo = wx.getSystemInfoSync();
  },
  onShow: function () {},
  onHide: function () {},
  globalData: {
    userInfo: null,
    systemInfo:null,
    baseURL:'http://localhost:3000'
  }
});