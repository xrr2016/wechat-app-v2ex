// pages/topic/topic.js
import { topic, topicReplies,userinfo} from "../../utils/API"
Page({
  data: {
    topicId: null,
    topic: {},
    replies: []
  },
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const self = this
    this.setData({
      topicId: options.id
    })
    wx.request({
      url: `${topic}?id=${self.data.topicId}`,
      method: 'GET',
      success: function (res) {
        self.setData({
          topic: res.data[0]
        })
        wx.setNavigationBarTitle({
          title: `${self.data.topic.node.title}`
        })
      }
    })
    wx.request({
      url: `${topicReplies}?topic_id=${self.data.topicId}`,
      method: 'GET',
      success: function (res) {
        self.setData({
          replies: res.data
        })
        console.dir(self.data.replies)
        wx.hideToast()
      }
    })
  },
  searchUser(e){
    const userId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/user/user?value=${userId}`
    })
  }
})