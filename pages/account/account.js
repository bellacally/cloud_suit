// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    fakie: [{
      model: "GX1000 Jet",
      description: "Best plane i've ever been in, period.",
      price: "$6000",
      name: "Benoit Jeremy"
    }, {
        model: "GX9000 Plane",
        description: "Best plane i've ever been in, period.",
        price: "$6000",
        name: "Samuel Jackson"
      },
      {
        model: "Boeing 747",
        description: "Very big plane for lots of your friends.",
        price: "$6000",
        name: "Sarah Kennedy"
      },
    ]
  },

// Switcher function
  switch1Change: function (e) {
    console.log('a change event occurred on switch1, with the value of', e.detail.value)
  },

  //事件处理函数
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page = this
    // when page loads, get the user id & info from local storage and save to page data
    const userId = wx.getStorageSync("userId")
    const userInfo = wx.getStorageSync("userInfo")

    this.setData({
      userId: userId,
      userInfo: userInfo
    })

    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/users/${userId}`,
      method: "GET",
      success(res) {
        console.log(res)
        const user = res.data
        page.setData({
          user: user
        })
      }
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
  
  },

  buttonLink: function (){
    wx.redirectTo({
      url: '/pages/new/new',
    })
  }
})