import { config, request } from './../util';

export default {
    /**
     * 获取用户信息
     * @param {*data} data 
     */
    getUserInfo(data){
        return request.requestGet(config.api.getUserInfo, data);
    },
    /**
     * 判断是否可授权读简历
     * @param {*data} data 
     */
    isAuthorizationResume(data){
        return request.requestGet(config.api.isAuthorizationResume, data);
    },
    /**
     * 获取授权
     * @param {*data} data 
     */
    resumeAuthorizationCode(data){
        return request.requestGet(config.api.resumeAuthorizationCode, data);
    },
    /**
     * 获取简历
     */
    getResumeDetail(data){
        return request.requestGet(config.api.getResumeDetail, data);
    }
}