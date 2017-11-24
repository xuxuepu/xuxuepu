import { Config, Request } from './../util';

export default {
    /**
     * 获取用户信息
     * @param {*data} data 
     */
    getUserInfo(data){
        return Request.requestGet(Config.api.getUserInfo, data);
    },
    /**
     * 判断是否可授权读简历
     * @param {*data} data 
     */
    isAuthorizationResume(data){
        return Request.requestGet(Config.api.isAuthorizationResume, data);
    },
    /**
     * 获取授权
     * @param {*data} data 
     */
    resumeAuthorizationCode(data){
        return Request.requestGet(Config.api.resumeAuthorizationCode, data);
    },
    /**
     * 获取简历
     */
    getResumeDetail(data){
        return Request.requestGet(Config.api.getResumeDetail, data);
    }
}