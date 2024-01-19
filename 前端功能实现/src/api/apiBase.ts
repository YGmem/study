import axios from "axios";
import { config } from "process";


const defaultConfig = {
  baseURL: "/api", // 基础地址
  timeout: 10000 // 超时时间毫秒
}


const request = axios.create(defaultConfig)


class HttpRequest {
  private static requestInstance = request

  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  /**  请求拦截/ */
  httpInterceptorsRequest() {
    HttpRequest.requestInstance.interceptors.request.use(config => {

      return config
    })
  }
  /** 响应拦截 */
  httpInterceptorsResponse() {
    HttpRequest.requestInstance.interceptors.response.use(config => {
      return config.data
    })
  }

  request(methods: string = 'get', url: string, params?: any) {
    let config = {
      methods,
      url,
      ...params
    }

    return HttpRequest.requestInstance.request(config)

  }

}



export const http = new HttpRequest()