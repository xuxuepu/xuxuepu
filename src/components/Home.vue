<template>
  <div class="home">
    <div v-for="item in dataItem" class="img-div img1">
      <img v-bind:src="item.img" alt="" style="width: 100%"/>
      <div class="itemText" v-html="item.text"></div>
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
        img: 'http://owzim6ew3.bkt.clouddn.com/img/1.jpg',
        text: '一个前端胖墩 - 喜欢自称前端人士<i style="display:inline-block;width:16px;height:16px;margin-left:2px;position:relative;top:2px;background-size:100%;background-image:url(data:image/png;base64,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);"></i>'
      },{
        img: 'http://owzim6ew3.bkt.clouddn.com/img/2.jpg',
        text: '一个假装文艺的前端'
      },{
        img: 'http://owzim6ew3.bkt.clouddn.com/img/3.jpg',
        text: '一个喜欢装二卖萌的前端'
      },{
        img: 'http://owzim6ew3.bkt.clouddn.com/img/4.jpg',
        text: '一个喜欢自拍的前端'
      },{
        img: 'http://owzim6ew3.bkt.clouddn.com/img/5.jpg',
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
