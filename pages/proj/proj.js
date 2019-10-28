// pages/proj/proj.js
var chat = require('../../utils/chat.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    proj_uri_head: 'https://github.com/tencentyun/',
    proj_uri_tail: 'cos-showcase',
    qr_uri: 'https://cosbrowser-1253960454.cos.ap-shanghai.myqcloud.com/miniprog/proj.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'DEMO 源码地址',
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
    chat.quitEndlessSend()
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

  },

  copyLink : function () {
    wx.setClipboardData({
      data: this.data.proj_uri_head + this.data.proj_uri_tail,
    })
  },

  previewQRCode: function(e) {
    wx.previewImage({
      current: this.data.qr_uri,
      urls: [this.data.qr_uri]
    })
  },

  sendQRCode: function () {
    chat.sendQRCode("demo_qrCode")
  }
})