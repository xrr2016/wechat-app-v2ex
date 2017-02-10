// pages/search/search.js
import { userinfo } from '../../utils/API'
Page({
  data:{
    searchValue:"",
    searchResult:{}
  },
  onLoad:function(options){
    this.setData({
      searchValue : "请输入需要查询用户的ID或用户名"
    })
  },
  search(e){
    const self = this
    let value = e.detail.value
    if(!value) return
    if(typeof value === "string"){
      let url = `${userinfo}?username=${value}`
    }else if(typeof value === "number"){
      let url = `${userinfo}?id=${value}`
    }else{
      wx.showToast({
        title:"请输入正确的用户名或ID",
        mask:true,
        duration : 1000
      })
      return 
    }
    this.setData({
      searchValue : value
    })
    wx.request({
      url: url,
      method: 'GET',
      success: function(res){
         self.setData({
           searchResult : res.data
         }) 
      }
    })
  },
  clearInput(e){
    e.detail.value = ""
    this.setData({
      searchValue:"",
      searchResult:[]
    })
  }
})