import { stateinfo,siteinfo} from '../../utils/API'
Page({
  data: {
    slogan : "",
    description : "",
    domain:""
  },
  onLoad: function () {
    wx.request({
      url: `${siteinfo}`,
      method: 'GET',
      success: function(res){
        this.setData({
          
        })
      }
    })
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/latest/latest',
        success: function(res){
          console.log('latest')
        }
      })
    },1000)
  }
})
