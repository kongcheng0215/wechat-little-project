//index.js  
//page页面一共有onLoad	Function	生命周期函数--监听页面加载
//onReady	Function	生命周期函数--监听页面渲染完成
//onShow	Function	生命周期函数--监听页面显示
//onHide	Function	生命周期函数--监听页面隐藏
//onUnload	Function	生命周期函数--监听页面卸载

//获取应用实例,获取app.js
var Countunt = 19; //自定义的数据只能在当前页面使用，并且不能在页面中{{}}拿到
var commom = require('../common.js');
var app = getApp()
//所有的 页面相关 数据事件都要放到
Page({
  //配置当前页面使用的数据，跟vue的data类似,可以在页面中 使用 {{}} 获取
  data:{
    motto: 'Hello World',
    userInfo: {},
    array: [1, 2, 3, 4, 5],
    item: {
      index: 0,
      msg: 'this template',
      time: '2016-09-23'
    },
    header:'首页',
    animationData:null
  },
  onReady:function(){
  
  },
  onShow:function(){
    var animation = wx.createAnimation({ //页面之间切换是没有动画设置的
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
    //设置初始状态
    animation.scale(2, 2).step();

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      //设置结束状态，这样才有动画
      animation.scale(1).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  //事件处理函数 处理页面通过bind+事件名绑定的  bind与catch的区别是后者会阻止冒泡
  bindViewTap: function(event) {
    //wx.navigateTo({
     // url: '../logs/logs'
   // })
   //跟vue一样 data里面的属性都是相应的，在组件内通过this调用
   console.log(event.currentTarget.dataset);
   //this.setData({
    //  motto:"小学生放假了了！"
   //})
  
  },
  onHide:function(){
     console.log("不要离开我！")
  },
  //onload:页面加载的时候执行的钩子函数
  onLoad: function (options) {
    //console.log(options.id)
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //setData函数用于将数据从逻辑层发送到视图层，也就是让数据的变化映射到Domom 变化，要调用它
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  onReady:function(){//页面渲染完成的钩子

  }
})
