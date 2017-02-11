// pages/user/user.js
import { userinfo } from '../../utils/API'
Page({
  data:{
    searchUrl : "",
    userinfo : {}
  },
  onLoad:function(options){
    console.log(options)
    const self = this
    this.setData({
      searchUrl : options.value
    })
     wx.request({
      url:   `${userinfo}?username=${self.data.searchUrl}`,
      method: 'GET',
      success: function(res){
         self.setData({
            userinfo : res.data
         })
      }
    })
  },
  onUnload:function(){
    this.setData({
      user : {}
    })
  }
})