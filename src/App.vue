<template>
  <div id="app">
    <tab-menu></tab-menu>
  </div>
</template>

<script>
import TabMenu from './components/TabMenu'

export default {
  name: 'app',
  components: {
    TabMenu
  }
}
</script>

<style>
body{
  background:#FAFAFA;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, div, dl, dt, dd, ul, ol, li, pre, form, fieldset, lengend, button, input, textarea, th, td { margin: 0; padding: 0;}
/*body*/
body { font:14px "Microsoft YaHei",微软雅黑,"Arail"; /* letter-spacing: 1px; */overflow-x:hidden;}
fieldset, img { border: 0; }
::-webkit-input-placeholder { /* WebKit browsers */ color:#b2b2b2;}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */color:#b2b2b2;}
::-moz-placeholder { /* Mozilla Firefox 19+ */color:#b2b2b2;}
:-ms-input-placeholder { /* Internet Explorer 10+ */color:#b2b2b2;}
::-ms-clear { display: none; }
::-ms-reveal { display: none; }
.remove_scrollbar::-webkit-scrollbar{width:0px}/*去除滚动条,依然可滚动*/
input, button, select, textarea { outline: none; }
ul, li { list-style-type: none; }
a { text-decoration: none; }
a:active { color: #1D9FD5;}

/*字体大小*/
.f_s8 { font-size: 8px !important; }
.f_s10 { font-size: 10px !important; }
.f_s11 { font-size: 11px !important; }
.f_s12 { font-size: 12px !important; }
.f_s13 { font-size: 13px !important; }
.f_s14 { font-size: 14px !important; }
.f_s16 { font-size: 16px !important; }
.f_s18 { font-size: 18px !important; }
.f_s20 { font-size: 20px !important; }
.f_s24 { font-size: 24px !important; }
.f_s36 { font-size: 36px !important; }

@font-face {
  font-family: 'iconfont';  /* project id："169033" */
  src: url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.eot');
  src: url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.eot') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>
