// pages/user/user.js
import { userinfo, topic } from '../../utils/API'
Page({
  data: {
    searchUrl: "",
    userinfo: {},
    userTopics: []
  },
  onLoad: function (options) {
    wx.showToast({
      title: "加载中",
      icon: "Loading"
    })
    const self = this
    this.setData({
      searchUrl: options.value
    })
    wx.request({
      url: `${userinfo}?username=${self.data.searchUrl}`,
      method: 'GET',
      success: function (res) {
        self.setData({
          userinfo: res.data
        })
      }
    })
    wx.request({
      url: `${topic}?username=${self.data.userinfo.username}`,
      method: 'GET',
      success: function (res) {
        self.setData({
          userTopics: res.data
        })
        wx.hideToast()
      }
    })
  },
  onUnLoad:function() {
    this.setData({
      searchUrl: "",
      userinfo: {},
      userTopics: []
    })
  },
  showTopic(e) {
    const topicId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/topic/topic?id=${topicId}`
    })
  }
})