const app = getApp()
Page({
  data:{
    banners:[
      '/assets/6.jpg',
      '/assets/6.jpg',
      '/assets/6.jpg',
      '/assets/6.jpg',
      '/assets/6.jpg',
    ],
    list:[
      {
        id:1,
        title:'圣诞奇妙味',
        image:'/assets/1.jpg'
      },{
        id: 2,
        title: '圣诞奇妙味',
        image: '/assets/2.jpg'
      },{
        id: 3,
        title: '圣诞奇妙味',
        image: '/assets/3.jpg'
      },{
        id: 4,
        title: '圣诞奇妙味',
        image: '/assets/4.jpg'
      },{
        id: 5,
        title: '圣诞奇妙味',
        image: '/assets/5.jpg'
      },{
        id: 6,
        title: '圣诞奇妙味',
        image: '/assets/5.jpg'
      }
    ]
  },
  goDetail(e){
    let { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/detail/detail?id=' + id})
  },
  goHistory(){
    wx.navigateTo({
      url: '/pages/history/history'
    })
  }
})