import { default as instance } from "axios";


let axios = instance.create({
  baseURL: process.env.SHOPIFY_API_URL,
  timeout: 20 * 1000,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});
axios.CancelToken = instance.CancelToken;
axios.isCancel = instance.isCancel;
axios.source = axios.CancelToken.source();
axios.interceptors.request.use(function (config) {
  let token = cookie.get("access_token");
  config.headers["ngrok-skip-browser-warning"] = 1;
  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error.response || error);
  }
);
export default axios;