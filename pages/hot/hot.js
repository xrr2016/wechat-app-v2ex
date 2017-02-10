// pages/hot/hot.js
import { hotTopics } from '../../utils/API'
Page({
  data:{
    hotTopics:[],
    msg:"hotTopics"
  },
  onLoad:function(options){
   const self = this
   wx.request({
     url: hotTopics,
     method: 'GET',
     success: function(res){
       self.setData({
         hotTopics : res.data
       })
       console.dir(self.data.hotTopics)
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