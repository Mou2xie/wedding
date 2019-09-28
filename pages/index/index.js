Page({

  data: {
    current:0,
    animateText:{},
    animateSwiper:{},
    heartNumArr:[1],
    musicIconCss:"musicIconCotainer-image-on",
    musicIconImage:"/static/img/musicOn.png",
    imgArr:[
      { 
        mainImg:"/static/img/sayHello_01.png",
        titleImg:"/static/img/nihao.png",
        description:"2014年初，在浩瀚的互联网上，一个偶然的机会，小白和老谢开始了第一次对话。"
      },
      {
        mainImg: "/static/img/fastFood_02.png",
        titleImg: "/static/img/jianmian.png",
        description: "一个月后，小白到老谢公司附近办事，老谢坐公交车为小白送去午餐便当，费劲心机见上了第一面。"
      },
      {
        mainImg: "/static/img/modelShop_03.png",
        titleImg: "/static/img/yuehui.png",
        description: "第一次约会地点被直男老谢选在了模型店，小白被科普了一天的战争和历史。老谢眉飞色舞、唾沫横飞，似乎并没有意识到有什么不妥。"
      },
      {
        mainImg: "/static/img/holdHands_04.png",
        titleImg: "/static/img/qianshoui.png",
        description: "那之后，老谢被朋友严厉“教育”了一番。在一个华灯初上的夜晚，老谢终于鼓起勇气拿出手机，给远在十公分之外的小白发了一条微信——“我可以牵你手吗？”"
      },
      {
        mainImg: "/static/img/becomeStone_05.png",
        titleImg: "/static/img/yongqi..png",
        description: "放下手机，老谢觉得自己耗尽了20年的勇气。"
      },
      {
        mainImg: "/static/img/marriageCertificate_06.png",
        titleImg: "/static/img/zaiyiq..png",
        description: "现在，距离那次历史性的“握手”已经过去了5年，小白和老谢的关系也即将进入全新的历史阶段。"
      },
      {
        mainImg: "/static/img/lastPage_07.png",
        titleImg: "/static/img/jianzheng.png",
        description: " 所以，诚邀你参与我们的婚礼，继续见证小白和老谢的故事。"
      },
    ],
    isOn:""
  },

  onLoad: function (options) {
    var _this = this;
    var intervalId = setInterval(function(){
      if(_this.data.current<6){
        _this.setData({ current: _this.data.current + 1 });
      }else{
        clearInterval(intervalId);

      }
    },7000);

    this.setData({ animateSwiper:this.fade(1000,1),});
    
    setTimeout(function(){
      _this.setData({ animateText:_this.fade(1000,1)});
    },2000);

    if(getApp().globalData.audioPlay || getApp().globalData.audioPlay == undefined){
      this.setData({isOn:"on"});
    }else{
      this.setData({isOn:"off"});
    }
  },

  onShareAppMessage: function () {
    
  },

  changeCurrent:function(e){

    var heartNumArrNew = [];
    this.setData({ current:e.detail.current});

    for(var i = 0;i<this.data.current+1;i++){
      heartNumArrNew.push(1);
    }

    this.setData({ heartNumArr: heartNumArrNew});

    if(e.detail.current==6){
      setTimeout(function(){
        wx.redirectTo({
          url: '/pages/invitation/invitation'
      });
      },4000);
    }
  },

  fade:function(duration,num){
    var fadeAnimat = wx.createAnimation({
      duration: duration,
      timingFunction: 'linear'
    });

    fadeAnimat.opacity(num).step();
    return fadeAnimat.export();
  },

  controlMusicPlay:function(e){
    if(e.detail.changeTo =="off"){
      getApp().globalData.innerAudioContext.stop();
      getApp().globalData.audioPlay = false
    }else{
      getApp().globalData.innerAudioContext.play();
      getApp().globalData.audioPlay = true
    }
  }
})