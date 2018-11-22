// pages/list/list.js

const app = getApp()
const AV = require('../../utils/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // set the upload pic image
    tempFilePaths: '/images/upload.png'
  },

  imageClicked: function() {
    var page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        page.setData({
          tempFilePaths: res.tempFilePaths
        }) 
      }
    })
  },

  bindFormSubmit: function (e) {
    //upload pics to LeanCloud
      new AV.File('file-name', {
        blob: {
          uri: this.data.tempFilePaths[0],
        },
      }).save().then(
        function(file) {
          //got url from LeanCloud
          console.log(file.url())
    // get user id from local storage
          let userId = wx.getStorageSync("userId")
          let user = {
            user: {
              id: userId
            }
          }
          let jet = {
            model: e.detail.value.model,
            manufactory: e.detail.value.manufactory,
            location: e.detail.value.location,
            capacity_of_passengers: e.detail.value.capacity_of_passengers,
            photo: file.url()
          }
          // wrap user and submission data as an object
          let request = Object.assign(user, jet)
          wx.request({
            url: 'https://cloud-suite.herokuapp.com/api/v1/jets',
            method: 'POST',
            data: request,
            success(res) {
              // get api response with jet's id, to navigateTo show page
              wx.navigateTo({
                url: `/pages/show/show?id=${res.data.id}`
              });
            }
          });
        }).catch(console.error)

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

  

 
