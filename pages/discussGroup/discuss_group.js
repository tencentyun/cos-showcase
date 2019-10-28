// pages/discussGroup/discuss_group.js
var chat = require('../../utils/chat.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    group: '377986805',
    qr_uri: 'https://cosbrowser-1253960454.cos.ap-shanghai.myqcloud.com/miniprog/group.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '开发者交流群',
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

  copyLink: function () {
    wx.setClipboardData({
      data: this.data.group,
    })
  },

  previewQRCode: function (e) {
    wx.previewImage({
      current: this.data.qr_uri,
      urls: [this.data.qr_uri]
    })
  },

  sendQRCode: function () {
    chat.sendQRCode("qq_qrCode")
  }
})