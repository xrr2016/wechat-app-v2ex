// pages/latest/latest.js
import { latestTopics,topicReplies } from '../../utils/API'
Page({
  data:{
    latestTopics:[],
    topicId : ""
  },
  onLoad:function(options){
   const self = this
   wx.request({
     url: latestTopics,
     method: 'GET',
     success: function(res){
       self.setData({
         latestTopics : res.data
       })
     }
   })
  },
  showContent(e){
    const topicId = e.currentTarget.dataset.id
    wx.navigateTo({
      url : `/pages/topic/topic?id=${topicId}`
    })
  }
})