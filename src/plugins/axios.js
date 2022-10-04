import { default as instance } from "axios";
import { SHOPIFY_API_URL, SHOPIFY_ACCESS_TOKEN } from '@env'

let axios = instance.create({
  baseURL: SHOPIFY_API_URL,
  timeout: 60 * 1000,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});
axios.CancelToken = instance.CancelToken;
axios.isCancel = instance.isCancel;
axios.source = axios.CancelToken.source();
axios.interceptors.request.use(function (config) {
  config.headers["ngrok-skip-browser-warning"] = 1;
  config.headers["Content-Type"] = "application/json";
  config.headers["X-Shopify-Access-Token"] = SHOPIFY_ACCESS_TOKEN;

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