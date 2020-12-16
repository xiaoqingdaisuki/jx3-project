import axios from "axios";
import Qs from "qs"; 

const instance = axios.create({
  baseURL: 'locahost',
  timeout: 10000,
  // 允许在向服务器发送前，修改请求数据
  transformRequest: [
    function (data) {
      return data;
    },
  ],
  // 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    function (data) {
      return JSON.parse(data);
    },
  ],
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      const type = config.headers["Content-Type"];
      if (type && type.includes("json")) { 
        config.data = JSON.stringify(config.data); // 类型 'application/json;'
      } else { 
        config.data = Qs.stringify(config.data); // 类型 'application/x-www-form-urlencoded;'
      }
    }
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (err) => {
    const { response } = err;
    if (response) {
      // errorCode(response.status, response.data);
      return Promise.reject(response);
    } else {
      console.log("请求失败");
    }
  }
);

const errorCode = (status, other) => {
  switch (status) {
    case 200:
      console.log("success");
      break;
    default:
      console.log("error request");
      break;
  }
};

export default http;
