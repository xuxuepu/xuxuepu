/**
* 微信sdk
* xuxuepu create 2017-3-23
*/

const weixinSdk = {
    //配置微信js引用
    winXinConfig(data,callback){
        wx.config({
            "debug": false, // 开启调试模式
            "appId": data.appid, // 必填，公众号的唯一标识
            "timestamp": data.timestamp , // 必填，生成签名的时间戳
            "nonceStr": data.noncestr, // 必填，生成签名的随机串
            "signature": data.signature,// 必填，签名，见附录1
            "jsApiList": data.jsApiList || [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(()=>{
            typeof callback == "function" ? callback('ok'): null;
        });
    },
    //config信息验证后会执行ready方法
    winXinReady(callback){
        wx.ready(()=>{
            typeof callback == "function" ? callback('ok'): null;
        });
    },
    /**
     * 微信支付
     * @param data startWeiXinPay传过的data
     * @param callback 回调方法
     */
    onBridgeReady(data, callback){
        wx.chooseWXPay({
            "appId": data.appId,   //公众号名称，由商户传入
            "timestamp": data.timeStamp,  //时间戳，自1970年以来的秒数
            "nonceStr": data.nonceStr, //随机串
            "package": data.package,//
            "signType": data.signType, //微信签名方式：
            "paySign": data.paySign, //微信签名
            "success": function(res){
                typeof callback == "function" ? callback('ok') : null;
            },
            "cancel": function(res){
                typeof callback == "function" ? callback('cancel') : null;
            },
            "fail": function(res){
                typeof callback == "function" ? callback('fail') : null;
            }
        });
    },
    /**
     * 调起微信支付
     * @param data data的数据集
     * "appId":"wx465456544",     //公众号名称，由商户传入
     * "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
     * "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
     * "package":"prepay_id=u802345jgfjsdfgsdg888",
     * "signType":"MD5", //微信签名方式：
     * "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
     * @param callback
     */
    startWeiXinPay(data, callback){
        this.onBridgeReady(data, callback);
    },
    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
     * @param data
     * @param success 成功后回调
     * @param cancel 取消后回调
     */
    onMenuShareTimeline(data, success, cancel){
        wx.onMenuShareTimeline({
            title: data.title, // 分享标题
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                typeof success == "function" ? success() : null;
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                typeof cancel == "function" ? cancel() : null;
            }
        });
    },
    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
     * @param data
     * @param success 成功后回调
     * @param cancel 取消后回调
     */
    onMenuShareAppMessage(data, success, cancel){
        wx.onMenuShareAppMessage({
            title: data.title, // 分享标题
            desc: data.desc, // 分享描述
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            type: data.type || 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: data.dataUrl || '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                typeof success == "function" ? success() : null;
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                typeof cancel == "function" ? cancel() : null;
            }
        });
    },
    /**
     * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
     * @param data
     * @param success 成功后回调
     * @param cancel 取消后回调
     */
    onMenuShareQQ(data, success, cancel){
        wx.onMenuShareQQ({
            title: data.title, // 分享标题
            desc: data.desc, // 分享描述
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                typeof success == "function" ? success() : null;
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                typeof cancel == "function" ? cancel() : null;
            }
        });
    },
    /**
     * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
     * @param data
     * @param success 成功后回调
     * @param cancel 取消后回调
     */
    onMenuShareWeibo(data, success, cancel){
        wx.onMenuShareWeibo({
            title: data.title, // 分享标题
            desc: data.desc, // 分享描述
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                typeof success == "function" ? success() : null;
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                typeof cancel == "function" ? cancel() : null;
            }
        });
    },
    /**
     * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
     * @param data
     * @param success 成功后回调
     * @param cancel 取消后回调
     */
    onMenuShareQZone(data, success, cancel){
        wx.onMenuShareQZone({
            title: data.title, // 分享标题
            desc: data.desc, // 分享描述
            link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: data.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                typeof success == "function" ? success() : null;
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                typeof cancel == "function" ? cancel() : null;
            }
        });
    },

    /**
     * 调用扫描二维码，测试以后删除
     * @param callback
     */
    scanQRCode(callback){
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["barCode","qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: callback
        })
    },
    /**
     * 获取位置信息
     * @param callback 
     */
    getLocation(callback){
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function(res){
                typeof callback == "function" ? callback(res, 'ok') : null;
            },
            cancel: function(res){
                typeof callback == "function" ? callback(res, 'cancel') : null;
            },
            fail: function(res){
                typeof callback == "function" ? callback(res, 'fail') : null;
            }
        });
    }
};

export default weixinSdk;



