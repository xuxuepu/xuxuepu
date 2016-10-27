<template>
  <div class="my">
    <mt-header title="胖墩的资料"></mt-header>
    <mt-cell title="15889559171" is-link to="tel:15889559171">
      <i slot="icon" class="iconfont" style="color:#007800;margin-right:10px;">&#xe609;</i>
    </mt-cell>
    <mt-cell title="xuxuepu@126.com" is-link to="mailto:xuxuepu@126.com">
      <i slot="icon" class="iconfont" style="color:#0084FF;margin-right:10px;">&#xe605;</i>
    </mt-cell>
    <mt-cell title="529199267" is-link to="tencent://message/?uin=529199267&Site=&Menu=yes">
      <i slot="icon" class="iconfont" style="color:#FF4521;margin-right:10px;">&#xe606;</i>
    </mt-cell>
    <mt-cell title="http://www.xuxuepu.com">
      <i slot="icon" class="iconfont" style="color:#844200;margin-right:10px;">&#xe60a;</i>
    </mt-cell>
    <mt-cell title="广东省深圳市南山区南山智园C3栋">
      <i slot="icon" class="iconfont" style="color:#428484;margin-right:10px;">&#xe607;</i>
    </mt-cell>
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
