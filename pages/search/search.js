// pages/search/search.js
import { userinfo } from '../../utils/API'
Page({
  data:{
    searchValue:"",
    searchUrl : "",
    searchResult:{}
  },
  onLoad:function(options){
    this.setData({
      searchValue : "请输入需要查询用户的ID或用户名"
    })
  },
  onInput(e){
    let value = e.detail.value
    this.setData({
      searchValue : value
    })
  },
  search(e){
    const self = this
    const value = this.data.searchValue
    if(!value) return
    if(typeof value === "string"){
      const searchUrl = `${userinfo}?username=${value}`
      this.setData({
        searchUrl : searchUrl
      })
    } else if(typeof value === "number"){
      const searchUrl = `${userinfo}?id=${value}`
      this.setData({
        searchUrl : searchUrl
      })
    } else {
      wx.showToast({
        title:"请输入正确的用户名或ID",
        mask:true,
        duration : 1000
      })
      return 
    }
    wx.request({
      url: self.data.searchUrl,
      method: 'GET',
      success: function(res){
         self.setData({
           searchResult : res.data
         })
         wx.navigateTo({
           url: `/pages/user/user?res=${self.data.searchResult}`,
           success: function(res){
             console.log('user page')
           }
         })
      }
    })
  },
  onHide(){
     this.setData({
      searchValue:"",
      searchUrl:"",
      searchResult:[]
    })
  }
})