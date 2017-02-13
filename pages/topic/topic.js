// pages/topic/topic.js
import { topic,topicReplies } from "../../utils/API"
Page({
  data:{
    topicId :null,
    topic : {},
    replies :[]
  },
  onLoad:function(options){
    const self = this
    this.setData({
      topicId : options.id
    }),
    wx.request({
      url: `${ topic }?id=${self.data.topicId}`,
      method: 'GET',
      success: function(res){
        self.setData({
          topic : res.data[0]
        })
        console.dir(self.data.topic)
      }
    })
    wx.setNavigationBarTitle({
      title: `${this.data.topic.title}`
    })
    wx.request({
      url: `${topicReplies}?topic_id=${self.data.topicId}`,
      method: 'GET',
      success: function(res){
        self.setData({
          replies : res.data
        })
        console.dir(self.data.replies)
      }
    })
  }
})