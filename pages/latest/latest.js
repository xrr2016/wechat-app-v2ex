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
  }
})