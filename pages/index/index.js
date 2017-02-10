Page({
  data: {
    msg:"Yo!"
  },
  onLoad: function () {
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
