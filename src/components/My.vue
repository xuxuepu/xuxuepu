<template>
  <div class="my">
    <table>
      <tr>
        <td class="td1" rowspan="2">
          <img src="./../assets/123.jpg" width="64" height="64" alt=""/>
        </td>
        <td class="td2">
          <i slot="icon" class="iconfont" style="color:#fff;margin-right:10px;">&#xe67b;</i>
          <span>{{myInfo.nickname}}</span>
        </td>
      </tr>
      <tr>
        <td class="td3">
          <i slot="icon" class="iconfont" style="color:#fff;margin-right:10px;">&#xe6f3;</i>
          <span>{{myInfo.username}}</span>
        </td>
      </tr>
    </table>
    <mt-cell v-bind:title="myInfo.phone" is-link v-bind:to="'tel:'+myInfo.phone">
      <i slot="icon" class="iconfont" style="color:#840042;margin-right:10px;">&#xe611;</i>
    </mt-cell>
    <mt-cell v-bind:title="myInfo.weixin" is-link>
      <i slot="icon" class="iconfont" style="color:#007800;margin-right:10px;">&#xe602;</i>
    </mt-cell>
    <mt-cell v-bind:title="myInfo.qq" is-link v-bind:to="'tencent://message/?uin='+myInfo.qq+'&Site=&Menu=yes'">
      <i slot="icon" class="iconfont" style="color:#FF4521;margin-right:10px;">&#xe648;</i>
    </mt-cell>
    <mt-cell v-bind:title="myInfo.email" is-link v-bind:to="'mailto:'+myInfo.email">
      <i slot="icon" class="iconfont" style="color:#0084FF;margin-right:10px;">&#xe643;</i>
    </mt-cell>
    <mt-cell v-bind:title="myInfo.url">
      <i slot="icon" class="iconfont" style="color:#844200;margin-right:10px;">&#xe62d;</i>
    </mt-cell>
    <mt-cell v-bind:title="myInfo.address">
      <i slot="icon" class="iconfont" style="color:#428484;margin-right:10px;">&#xe601;</i>
    </mt-cell>
    <div style="padding:30px 20px 0;text-align:center;"><mt-button icon="more" type="primary" size="large" @click.native="showDetailInfo">更多资料</mt-button></div>
    <xxp-menu/>
  </div>
</template>

<script>
import { Cell, MessageBox, Button, Indicator } from 'mint-ui';
import { my } from './../service';
import Menu from './Menu';

export default {
  name: 'my',
  components: {
    'xxp-menu': Menu,
    'mt-cell': Cell,
    'mt-button': Button
  },
  created(){
    this.getMyInfo();
  },
  methods: {
    //显示授权
    showDetailInfo() {
      let that = this;
      let msgbox = ()=>{
        MessageBox.prompt('请输入授权码', '胖墩提示').then(({ value, action }) => {
          if(!value){
            MessageBox.alert('授权码不能为空', '胖墩提示').then(action => {
              msgbox();
            });
            return false;
          }
          if(action == 'confirm'){
            that.judgeAuthorizationCode(value);
          }
        });
      };

      Indicator.open({
        text: '请稍候...',
        spinnerType: 'fading-circle'
      });
      my.isAuthorizationResume({
        vueComponent: that
      }).then(res =>{
        Indicator.close();
        if(!res.code){
            that.$router.push({ name: 'Resume' });
        }else{
          msgbox();
        }
      });
    },
    //判断授权码
    judgeAuthorizationCode(code){
      let that = this;
      Indicator.open({
        text: '请稍候...',
        spinnerType: 'fading-circle'
      });
      my.resumeAuthorizationCode({
        vueComponent: that,
        authorization_code: code,
        user_id: that.$data.myInfo.id
      }).then(res =>{
        Indicator.close();
        if(!res.code){
            that.$router.push({ name: 'Resume' });
        }else{
          MessageBox.alert('授权码不正确', '胖墩提示');
        }
      });
    },
    //获取我的信息
    getMyInfo(){
      let that = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      my.getUserInfo({
        vueComponent: that,
        id: 1
      }).then(res =>{
        Indicator.close();
        if(!res.code){
            that.$data.myInfo = res.data;
        }else{
          MessageBox.alert(res.message, '胖墩提示');
        }
      });
    }
  },
  data () {
    return {
      myInfo: {
        nickname: 'loading...',
        username: 'loading...',
        phone: 'loading...',
        weixin: 'loading...',
        qq: 'loading...',
        email: 'loading...',
        url: 'loading...',
        address: 'loading...'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    width:100%;
    background-image:url(../assets/my_bg.jpg);
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
  }
  table .td1{
    width:120px;
    height:60px;
  }
  table .td1 img{
      border-radius:50%;
      margin:5px 0 0 15px;
      border:5px solid rgba(255,225,225,.5);
  }
  table .td2, table .td3{
    height:60px;
    color:#fff;
    font-size:16px;
    text-shadow:3px 3px 10px #848484;
  }
  table .td2{
    vertical-align:bottom;
    padding-bottom:2px;
  }
  table .td3{
    vertical-align:top;
    padding-top:2px;
  }
</style>
