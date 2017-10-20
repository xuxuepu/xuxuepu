const config = (() => {
  // 服务器地址
  let url = window.location.origin
  // 是否是开发环境
  let isLocalhost = url.indexOf('localhost') >= 0 || url.indexOf('192.168') >= 0
  return {
    // 是否是开发环境
    isLocalhost: isLocalhost,
    // 打印请求日志
    isPrintLog: isLocalhost,
    // ajax_http locals
    requestHttp: 'https://service.xuxuepu.com/api',
    // ajax_http请求url
    api: {
      getHome: '/home',
      getEssayList: '/essay/list'
    },
    urlOrigin: url, // 当前url
    qiniuPath: 'https://www.xuxuepu.com/'// 七牛地址
  }
})()

export default config