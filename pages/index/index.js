import { stateinfo, siteinfo } from '../../utils/API'
Page({
  data: {
    slogan: "",
    description: "",
    domain: ""
  },
  onLoad: function () {
    const self = this
    wx.request({
      url: `${siteinfo}`,
      method: 'GET',
      success: function (res) {
        self.setData({
          slogan: res.data.slogan,
          description: res.data.description,
          domain: res.data.domain
        })
      },
      complete: function () {
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/latest/latest',
            success: function (res) {
              console.log('latest')
            }
          })
        }, 1000)
      }
    })
  }
})
