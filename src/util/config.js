const Config = (() => {
  // 服务器地址
  let url = window.location.origin;
  // 是否是开发环境
  let isLocalhost = url.indexOf('localhost') >= 0 || url.indexOf('192.168') >= 0;
  // ajax_http locals
  let requestHttp = 'http://service.xuxuepu.com/api';
  return {
    // 是否是开发环境
    isLocalhost: isLocalhost,
    // 打印请求日志
    isPrintLog: isLocalhost,
    // ajax_http请求url
    api: {
      getHome: requestHttp + '/home',
      getEssayList: requestHttp + '/essay/list',
      getEssayDetail: requestHttp + '/essay/detail',
      getUserInfo: requestHttp + '/user/info',
      isAuthorizationResume: requestHttp + '/resume/is_authorization_resume',
      resumeAuthorizationCode: requestHttp + '/resume/authorizationcode_by_userid',
      getResumeDetail: requestHttp + '/resume/detail'
    },
    urlOrigin: url, // 当前url
    qiniuPath: 'http://www.xuxuepu.com/'// 七牛地址
  }
})();

export default Config;