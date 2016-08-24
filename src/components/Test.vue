<template>
  <div class="test">
    <h1>{{ msg }}</h1>
	<a href="#" class="weui_btn weui_btn_primary">按钮</a>
	<a href="#" class="weui_btn weui_btn_disabled weui_btn_primary">按钮</a>
	<a href="#" class="weui_btn weui_btn_warn">确认</a>
	<a href="#" class="weui_btn weui_btn_disabled weui_btn_warn">确认</a>
	<a href="#" class="weui_btn weui_btn_default">按钮</a>
	<a href="#" class="weui_btn weui_btn_disabled weui_btn_default">按钮</a>
	<div class="button_sp_area">
		<a href="#" class="weui_btn weui_btn_plain_default">按钮</a>
		<a href="#" class="weui_btn weui_btn_plain_primary">按钮</a>

		<a href="#" class="weui_btn weui_btn_mini weui_btn_primary">按钮</a>
		<a href="#" class="weui_btn weui_btn_mini weui_btn_default">按钮</a>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '哎哟，这个更屌！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
