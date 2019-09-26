//app.js
App({

    onLaunch: function(options){

        var innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.loop = true;
        innerAudioContext.src = "/static/audio/8bit_World.mp3";
        
    },
    onShow: function(options){

    },
    onHide: function(){

    },
    onError: function(msg){

    },

    globalData: {
        
    }
});