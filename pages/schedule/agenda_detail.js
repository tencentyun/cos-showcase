// pages/schedule/agenda_detail.js
var data = require('agenda_data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: data.day,
    agenda: '12121212'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    for (var i = 0; i < data.agenda.length; i++) {
      if (data.agenda[i].id == id) {
        this.setData({
          agenda: data.agenda[i]
        });
        break;
      }
    }
    wx.setNavigationBarTitle({
      title: '议题详情'
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