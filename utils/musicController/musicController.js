var switchOn = {
    musicIconCss:"musicIconCotainer-image-on",
    musicIconImage:"/static/img/musicOn.png"
};

var switchOff = {
    musicIconCss:"musicIconCotainer-image-off",
    musicIconImage:"/static/img/musicOff.png"
};

Component({
    properties: {
        switch:{
            type:String,
            value:""
        }
    },
    data: {
        musicIconCss:"",
        musicIconImage:"",
        switchStatus:""
    },
    lifetimes:{

        ready:function(){
            this.setData({switchStatus:this.data.switch});

            if(this.data.switchStatus=="on"){
                this.setData({musicIconCss:switchOn.musicIconCss});
                this.setData({musicIconImage:switchOn.musicIconImage});
            }else{
                this.setData({musicIconCss:switchOff.musicIconCss});
                this.setData({musicIconImage:switchOff.musicIconImage});
            }
        }
    },
    methods: {
        switchStatusFun:function(){
            var changeSwitchStatus = {};
            if(this.data.switchStatus=="on"){
                this.setData({musicIconCss:switchOff.musicIconCss});
                this.setData({musicIconImage:switchOff.musicIconImage});
                this.setData({switchStatus:"off"});
                changeSwitchStatus.changeTo = "off"
            }else{
                this.setData({musicIconCss:switchOn.musicIconCss});
                this.setData({musicIconImage:switchOn.musicIconImage});
                this.setData({switchStatus:"on"});
                changeSwitchStatus.changeTo = "on"
            }
            this.triggerEvent('changeTo',changeSwitchStatus);
        }
    }
});