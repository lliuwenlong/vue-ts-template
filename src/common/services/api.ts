import Vue from 'vue';
import axios, { AxiosRequestConfig } from 'axios';

const service = axios.create({
    withCredentials: true,
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 180000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export interface CommonResponseType<T = unknown> {
    data: T;
    code: number;
    message: string;
}

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            if (res.data.code === 0) {
                return res.data;
            }
            if (res.data?.message) {
                Vue.prototype.$message({
                    message: res.data.message,
                    type: 'error'
                });
            }

            return Promise.reject(res.data);
        }
        Vue.prototype.$message({
            message: '网络请求失败',
            type: 'error'
        });
        return Promise.reject(res);
    },
    (error) => {
        Vue.prototype.$message({
            message: '网络请求失败',
            type: 'error'
        });
        return Promise.reject(error);
    }
);

// 定义ResponseType
export type ResponseType<T = null> = Promise<CommonResponseType<T>>;

const ApiService = {
    get<T = null> (resource: string, config?: AxiosRequestConfig) {
        return service.get<null, CommonResponseType<T>>(resource, config).catch((error) => {
            throw new Error(`[VUE2-APP] ApiService ${error}`);
        });
    },

    post<T = null> (resource: string, data: object, config?: AxiosRequestConfig) {
        return service.post<null, CommonResponseType<T>>(`${resource}`, data, config);
    },

    update<T = null> (resource: string, slug: string, data: object, config?: AxiosRequestConfig) {
        return service.put<null, CommonResponseType<T>>(`${resource}/${slug}`, data, config);
    },

    put<T = null> (resource: string, data: object, config?: AxiosRequestConfig) {
        return service.put<null, CommonResponseType<T>>(`${resource}`, data, config);
    },

    delete<T = null> (resource: string) {
        return service.delete<null, CommonResponseType<T>>(resource).catch((error) => {
            throw new Error(`[VUE2-APP] ApiService ${error}`);
        });
    }
};

export default ApiService;
