// pages/tab1/tab1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [
      {
        name: "今日头条",
        icon: "/images/home1.png",
        url: "/pages/today/today",
        auth: true
      },{
        name: "日常查寝",
        icon: "/images/home2.png",
        type: "inner",
        url: "",
        auth: true
      }, {
        name: "事件上报",
        icon: "/images/home3.png",
        type: "inner",
        url: "",
        auth: true
      }, {
        name: "统计分析",
        icon: "/images/home4.png",
        type: "inner",
        url: "",
        auth: true
      }, {
        name: "关注人群",
        icon: "/images/home5.png",
        type: "inner",
        url: "",
        auth: true
      }
    ]
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