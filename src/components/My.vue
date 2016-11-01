<template>
  <div class="my">
    <mt-header title="胖墩的资料"></mt-header>
    <img src="http://7xk0ie.com1.z0.glb.clouddn.com/123.jpg" style="width:100%;height:100%;" alt=""/>
    <mt-cell title="胖墩">
      <i slot="icon" class="iconfont" style="color:#004284;margin-right:10px;">&#xe60e;</i>
    </mt-cell>
    <mt-cell title="许学普 epo">
      <i slot="icon" class="iconfont" style="color:#848400;margin-right:10px;">&#xe638;</i>
    </mt-cell>
    <mt-cell title="15889559171" is-link to="tel:15889559171">
      <i slot="icon" class="iconfont" style="color:#840042;margin-right:10px;">&#xe609;</i>
    </mt-cell>
    <mt-cell title="xuxuepu" is-link to="#">
      <i slot="icon" class="iconfont" style="color:#007800;margin-right:10px;">&#x3433;</i>
    </mt-cell>
    <mt-cell title="529199267" is-link to="tencent://message/?uin=529199267&Site=&Menu=yes">
      <i slot="icon" class="iconfont" style="color:#FF4521;margin-right:10px;">&#xe606;</i>
    </mt-cell>
    <mt-cell title="xuxuepu@126.com" is-link to="mailto:xuxuepu@126.com">
      <i slot="icon" class="iconfont" style="color:#0084FF;margin-right:10px;">&#xe605;</i>
    </mt-cell>
    <mt-cell title="http://www.xuxuepu.com">
      <i slot="icon" class="iconfont" style="color:#844200;margin-right:10px;">&#xe60a;</i>
    </mt-cell>
    <mt-cell title="广东省深圳市南山区南山智园C3栋">
      <i slot="icon" class="iconfont" style="color:#428484;margin-right:10px;">&#xe607;</i>
    </mt-cell>
    <div style="padding:10px;"><mt-button type="default" size="large" >查看详细资料</mt-button></div>
  </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    onFlipped: function () {
      console.log('sdf')
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

</style>
