<template>
  <div>
    <div style="position:fixed;width:100%;z-index:2">
      <xheader :left-options="{showBack: false}">胖墩个人网站</xheader>
    </div>
    <div style="height:46px"></div>
    <div>
      <swiper :list="swiper_list" auto height="300px"></swiper>
    </div>
    <div>
      <divider><span style="color:#999;">联系我</span></divider>
      <ul>
        <li>电话：15889559171</li>
        <li>QQ：529199267</li>
        <li>e-mail：xuxuepu@126.com</li>
        <li>网址：http://www.xuxuepu.com</li>
      </ul>
    </div>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;" :opacity="0.5">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">{{item.title}}<br/>
          <span class="m-time">2016-08-26</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;" color="F9C90C" :opacity="0.6">
        <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"></div>
        <div slot="content" class="m-title">
          VUX
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <div style="height:65px"></div>
  </div>
</template>

<script>
  import Xheader from 'vux/dist/components/x-header'
  import Swiper from 'vux/dist/components/swiper'
  import Masker from 'vux/dist/components/masker'
  import WechatEmotion from 'vux/dist/components/wechat-emotion'
  import Divider from 'vux/dist/components/divider'
  import img1 from '../assets/1.jpg'
  import img2 from '../assets/2.jpg'
  import img3 from '../assets/3.jpg'
  import img4 from '../assets/4.jpg'

  export default {
    components: {
      Xheader, Swiper, Masker, WechatEmotion, Divider
    },
    data () {
      return {
        swiper_list: [{
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400385458&ampidx=1&ampsn=78f6b8d99715384bdcc7746596d88359&ampscene=19#wechat_redirect',
          img: img1,
          title: 'white'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400160890&ampidx=1&ampsn=29ef02af25793a11a3f6aec92bfb46c1&ampscene=19#wechat_redirect',
          img: img2,
          title: '军训'
        }, {
          url: 'http://mp.weixin.qq.com/s?__biz=MzAxNjU0MDYxMg==&ampmid=400094682&ampidx=1&ampsn=8231a2053b772b2108784fccc254d28c&ampscene=19#wechat_redirect',
          img: img3,
          title: '阳光'
        }],
        list: [{
          title: 'WEB前端工程',
          img: img4
        }, {
          title: '工程化',
          img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
        }, {
          title: '组件件',
          img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
        }, {
          title: '模块化',
          img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
        }, {
          title: '性能优化',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
  }
  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0,0,0,.5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
