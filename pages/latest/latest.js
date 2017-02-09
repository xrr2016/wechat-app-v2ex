// pages/latest/latest.js
import { latestTopics } from '../../utils/API'
Page({
  data:{
    latestTopics:[],
    msg:"最新话题"
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
    const content = e.currentTarget.dataset.content
    const url = e.currentTarget.dataset.url
    wx.navigateTo({
      // url: "/pages/topic/topic?content=" + content
      url : `/pages/topic/topic?content=${content}&url=${url}`
    })
  }
})