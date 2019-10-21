// pages/mian/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [
      { title: "分会场流程概览", url: "/pages/schedule/schedule"},
      { title: "存储产品体验", url: "/pages/proj/proj" },
      { title: "开发者交流群", url: "/pages/discussGroup/discuss_group" },
      { title: "产品demo", url: "/pages/index/index" }
    
    ],
  
    windowH: 300,
    windowW: 300,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var that = this;
    var app = getApp();
    this.setData({
      windowH: app.globalData.WINDOW_HEIGHT,
      windowW: app.globalData.WINDOW_WIDTH
    })

  },
  handleClickEvent: function (e) {

    var that = this;
    var url = e.currentTarget.dataset.url
   wx.navigateTo({
     url: url
   })



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