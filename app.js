App({

    globalData: {
        audioPlay:true,
        innerAudioContext:{}
    },

    onLaunch: function(options){

        var innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = this.globalData.audioPlay;
        innerAudioContext.volume = 0.3;
        innerAudioContext.loop = true;
        innerAudioContext.src = "/static/audio/Canlon126.mp3";
        this.globalData.innerAudioContext = innerAudioContext
        
    },
    onShow: function(options){

    },
    onHide: function(){

    },
    onError: function(msg){

    }
});