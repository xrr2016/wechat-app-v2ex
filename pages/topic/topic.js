// pages/topic/topic.js
Page({
  data:{
    content : "",
    url : ""
  },
  onLoad:function(options){
    const self = this
    this.setData({
      content : options.content,
      url : options.url
    })
  }
})