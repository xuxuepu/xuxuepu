import { config, request } from './../util';

export default {
    getUserInfo(data){
        return request.requestGet(config.api.getUserInfo, data);
    }
}