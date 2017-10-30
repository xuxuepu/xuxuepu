<template>
  <div class="home">
    <div v-for="item in dataItem" class="img-div img1">
      <img v-bind:src="item.img" alt="" style="width: 100%"/>
      <div class="itemText">{{item.text}}</div>
    </div>
    <xxp-menu/>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  name: "home",
  components: {
    'xxp-menu': Menu
  },
  created() {
    documentTitle('胖墩 - 前端人士');
  },
  data(){
    return {
      dataItem: [{
        img: require('./../assets/1.jpg'),
        text: '一个前端胖墩 - 喜欢自称前端人士'
      },{
        img: require('./../assets/2.jpg'),
        text: '一个假装文艺的前端'
      },{
        img: require('./../assets/3.jpg'),
        text: '一个喜欢装二卖萌的前端'
      },{
        img: require('./../assets/4.jpg'),
        text: '一个喜欢自拍的前端'
      },{
        img: require('./../assets/5.jpg'),
        text: '一个喜欢宅在家的前端'
      }]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-div {
  overflow: hidden;
  position: relative;
}
.img-div > img{
  float: left;
}
.itemText{
  position: absolute;
  font-size: 16px;
  color: #fff;
  width: 100%;
  background: rgba(0, 0, 0, .5);
  bottom: 0;
  padding: 10px;
  letter-spacing:2px;
}
</style>
