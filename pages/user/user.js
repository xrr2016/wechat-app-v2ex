// pages/user/user.js
Page({
  data:{
    user : {}
  },
  onLoad:function(options){
    console.log(options)
    this.setData({
      user : options
    })
  },
  onUnload:function(){
    this.setData({
      user : {}
    })
  }
})