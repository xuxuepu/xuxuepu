<template>
  <div class="home">
    <div class="banner_div">
      <mint-swipe :auto="4000">
        <mint-swipe-item><div class="banner_item1"></div></mint-swipe-item>
        <mint-swipe-item><div class="banner_item2"></div></mint-swipe-item>
        <mint-swipe-item><div class="banner_item3"></div></mint-swipe-item>
      </mint-swipe>
    </div>
    <div class="imgs_div">
      <div v-for="item in imgs">
        <ul>
          <li class="li1">{{item.str}}</li>
          <li><img v-bind:src="item.src" alt=""/></li>
        </ul>
      </div>
    </div>
    <xxp-menu/>
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem, Lazyload, Button, MessageBox } from "mint-ui";
import Menu from './Menu';

export default {
  name: "home",
  components: {
    "xxp-menu": Menu,
    "mint-searc": Search,
    "mint-swipe": Swipe,
    "mint-swipe-item": SwipeItem,
    "mint-lazyload": Lazyload,
    "mint-button": Button
  },
  created() {
    this.getList();
  },
  methods: {
    onFlipped() {
      console.log("sdf");
    },
    getList() {
      let that = this;
      that.$http({
          method: "GET",
          url: "https://service.xuxuepu.com/api/home"
        })
        .then(
          res => {
            //MessageBox('测试连接数据库', res.data.data.msg)
          },
          error => {

          }
        );
    }
  },
  data() {
    return {
      selected: "home",
      value: "adfsdf",
      imgs: [
        { str: "鱿鱼卷一锅炖", src: require("./../assets/1.jpg") },
        { str: "这是牛肉还是羊肉？", src: require("./../assets/2.jpg") },
        { str: "不晓得什么东东", src: require("./../assets/3.jpg") },
        { str: "撸串", src: require("./../assets/4.jpg") },
        { str: "白萝卜红萝卜...", src: require("./../assets/5.jpg") },
        { str: "貌似是红烧鱼啥的", src: require("./../assets/6.jpg") },
        { str: "不晓得哪里的肉圈", src: require("./../assets/7.jpg") },
        { str: "红烧猪蹄", src: require("./../assets/8.jpg") },
        { str: "烧鸭叉烧双拼", src: require("./../assets/9.jpg") },
        { str: "红烧肉", src: require("./../assets/10.jpg") }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner_div {
  height: 250px;
}
.banner_item1,
.banner_item2,
.banner_item3 {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.banner_item1 {
  background-image: url(./../assets/a1.jpg);
}
.banner_item2 {
  background-image: url(./../assets/a2.jpg);
}
.banner_item3 {
  background-image: url(./../assets/a3.jpg);
}
.imgs_div {
  overflow: hidden;
}
.imgs_div > div {
  float: left;
  width: 50%;
  text-align: center;
}
.imgs_div > div > ul {
  margin: 10px;
  position: relative;
}
.imgs_div > div img {
  width: 100%;
}
.imgs_div > div > ul > .li1 {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  width: 100%;
  bottom: 2px;
  padding: 5px 0;
  font-size: 12px;
}
</style>
