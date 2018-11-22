//index.js
//获取应用实例

Page({
  data: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  onLoad: function (options) {
    let that = this;
    // when page loads, get the user id & info from local storage and save to page data
    const userId = wx.getStorageSync("userId")
    const userInfo = wx.getStorageSync("userInfo")

    this.setData({
      userId: userId,
      userInfo: userInfo
    })

    // get all the jets information & save to page data
    wx.request({
      url: 'https://cloud-suite.herokuapp.com/api/v1/jets',
      method: 'GET',
      success(res) {
        console.log(res)
        const jets = res.data
        that.setData(
          jets
        )
      }
    })
  },
  
  bindPickerChange: function (e) {
    console.log('the chosen one!', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数
  // when click one jet, navigate to show page with jet's id

  showJet(e) {
    console.log(e)
    const data = e.currentTarget.dataset;
    const jet = data.jet;

    wx.navigateTo({
      url: `../show/show?id=${jet.id}`
    });
  }
})
