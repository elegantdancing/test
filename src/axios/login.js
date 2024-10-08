// 引入 axios 库
import axios from "axios";

export const getOrder = (name, password) => {
  return axios.post("https://gitee.com/oauth/token", {
    name,
    password,
  });
};
