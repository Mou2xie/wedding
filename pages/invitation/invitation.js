Page({
    data: {
        animation1:{},
        animation2:{},
        animation3:{},
    },

    onLoad: function(options){
        var _this = this;
        setTimeout(function(){
            _this.setData({animation1:_this.createAnimation(1000,1)});
        },1000);
        setTimeout(function(){
            _this.setData({animation2:_this.createAnimation(1000,1)});
        },2000);
        setTimeout(function(){
            _this.setData({animation3:_this.createAnimation(1000,1)});
        },3000);
    },

    goTo:function(){
        wx.redirectTo({
            url: '/pages/index/index'
        });
    },

    createAnimation:function(duration,num){
        var animation = wx.createAnimation({
            duration: duration,
            timingFunction: 'linear'
        });

        animation.opacity(num).step();
        return animation.export();
    }
});