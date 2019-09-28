App({

    globalData: {
        audioPlay:undefined,
        innerAudioContext:{}
    },

    onLaunch: function(options){
        var _this = this;

        setTimeout(function(){
            var innerAudioContext = wx.createInnerAudioContext();
            _this.globalData.audioPlay = true;
            innerAudioContext.autoplay = _this.globalData.audioPlay;
            innerAudioContext.volume = 0.5;
            innerAudioContext.loop = true;
            innerAudioContext.src = "/static/audio/Canlon126.mp3";
            _this.globalData.innerAudioContext = innerAudioContext
        },2000);
    },
    onShow: function(options){

    },
    onHide: function(){

    },
    onError: function(msg){

    }
});