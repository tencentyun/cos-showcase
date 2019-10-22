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



  }
  
 
})