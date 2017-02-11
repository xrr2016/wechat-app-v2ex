// pages/topic/topic.js
Page({
  data:{
    topicId : ""
  },
  onLoad:function(options){
    const self = this
    this.setData({
      topicId : options.id
    })
  }
})