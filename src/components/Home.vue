<template>
  <div class="home">
    <img src="http://7xk0ie.com1.z0.glb.clouddn.com/123.jpg" style="width:100%;height:100%;" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    onFlipped: function () {
      console.log('sdf')
    }
  },
  data () {
    return {
      selected: 'home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
