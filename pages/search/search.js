// pages/search/search.js
import { userinfo } from '../../utils/API'
Page({
  data: {
    searchValue: ""
  },
  onLoad: function (options) {
    this.setData({
      searchValue: "请输入需要查询用户的ID或用户名"
    })
  },
  onInput(e) {
    let value = e.detail.value
    this.setData({
      searchValue: value
    })
  },
  search(e) {
    const self = this
    const value = this.data.searchValue
    if (!value){
      wx.showToast({
        title: "请输入正确的用户名或ID",
        mask: true,
        duration: 1000
      })
      return
    }
    wx.navigateTo({
      url: `/pages/user/user?value=${self.data.searchValue}`
    })
  },
  onHide:function(){
    this.setData({
       searchValue: ""
    })
  }
})