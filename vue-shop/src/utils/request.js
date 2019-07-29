import Router from 'vue-router'
import axios from 'axios'
import moment from 'moment'
import { Message } from 'element-ui'

Date.prototype.toJSON = function() {
    return moment(this).format("YYYY-MM-DDTHH:mm:ss");
}

/**
 * 创建axios实例
 * @type {[type]}
 */
const server = axios.create({
    baseURL: process.env.Base_API,
    timeout: 10000
})

// 请求拦截
server.interceptors.request.use(config => {
    // 检测token不为空就带着token去访问
    config.headers["X-Requested-With"] = 'XMLHttpRequest';
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken();
    // }
    return config;
}, error => {
    Promise.reject(error);
})

// 响应拦截器
server.interceptors.response.use(res => {
    // 请求成功的处理
    let data = res.data;
    //if (data.success) {
        return data;
    /* } else {
        Message({
            message: data.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(data.message);
    } */
}, error => {
    console.log(error);
    if (error.response.status == 401) {
        new Router().replace('/login');
        // location.reload()
    } else {
        Message({
            message: error,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error);
    }
})

export default server