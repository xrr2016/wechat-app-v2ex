// pages/hot/hot.js
import { hotTopics } from '../../utils/API'
Page({
  data: {
    hotTopics: []
  },
  onLoad: function (options) {
    const self = this
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    wx.request({
      url: hotTopics,
      method: 'GET',
      success: function (res) {
        self.setData({
          hotTopics: res.data
        })
        wx.hideToast()
      }
    })
  },
  showContent(e) {
    const topicId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/topic/topic?id=${topicId}`
    })
  }
})