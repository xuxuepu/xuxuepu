<template>
  <div class="my">
    <sfc-header title="胖墩的资料"></sfc-header>
    <table>
      <tr>
        <td class="td1" rowspan="2">
          <img src="http://7xk0ie.com1.z0.glb.clouddn.com/123.jpg/min100" width="64" height="64" alt=""/>
        </td>
        <td class="td2">
          <i slot="icon" class="iconfont" style="color:#fff;margin-right:10px;">&#xe60e;</i>
          <span>胖墩XXXXXXXXL</span>
        </td>
      </tr>
      <tr>
        <td class="td3">
          <i slot="icon" class="iconfont" style="color:#fff;margin-right:10px;">&#xe638;</i>
          <span>许学普 epo</span>
        </td>
      </tr>
    </table>
    <sfc-cell title="15889559171" is-link to="tel:15889559171">
      <i slot="icon" class="iconfont" style="color:#840042;margin-right:10px;">&#xe609;</i>
    </sfc-cell>
    <sfc-cell title="xuxuepu" is-link to="#">
      <i slot="icon" class="iconfont" style="color:#007800;margin-right:10px;">&#x3433;</i>
    </sfc-cell>
    <sfc-cell title="529199267" is-link to="tencent://message/?uin=529199267&Site=&Menu=yes">
      <i slot="icon" class="iconfont" style="color:#FF4521;margin-right:10px;">&#xe606;</i>
    </sfc-cell>
    <sfc-cell title="xuxuepu@126.com" is-link to="mailto:xuxuepu@126.com">
      <i slot="icon" class="iconfont" style="color:#0084FF;margin-right:10px;">&#xe605;</i>
    </sfc-cell>
    <sfc-cell title="http://www.xuxuepu.com">
      <i slot="icon" class="iconfont" style="color:#844200;margin-right:10px;">&#xe60a;</i>
    </sfc-cell>
    <sfc-cell title="广东省深圳市南山区南山智园C3栋">
      <i slot="icon" class="iconfont" style="color:#428484;margin-right:10px;">&#xe607;</i>
    </sfc-cell>
    <div style="padding:10px;text-align:center;"><sfc-button icon="more" type="primary" size="large" @click.native="showDetailInfo">点击查看更多资料</sfc-button></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell, CellSwipe, MessageBox, Button } from 'sfc-ui'

Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(CellSwipe.name, Cell)
Vue.component(CellSwipe.name, Cell)
Vue.component(Button.name, Button)

export default {
  name: 'my',
  methods: {
    showDetailInfo: function () {
      MessageBox('提示', '暂未开放')
    }
  },
  data () {
    return {

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
    width:100px;
    height:50px;
  }
  table .td1 img{
      border-radius:50%;
      margin:5px 0 0 15px;
      border:5px solid rgba(255,225,225,.5);
  }
  table .td2, table .td3{
    height:50px;
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
