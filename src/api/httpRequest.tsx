import axios from "axios";

const httpRequest = async (method: any, url: any, request: any) => {
  try {
    await axios({
      method: method,
      headers: { "Access-Control-Allow-Origin": "*" },
      url: url,
      data: request,
    }).then((response: any) => {
      return Promise.resolve(response);
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  get(url: String, request: any) {
    return httpRequest("GET", url, request);
  },

  delete(url: String, request: any) {
    httpRequest("DELETE", url, request);
  },

  post(url: String, request: any) {
    httpRequest("POST", url, request);
  },

  put(url: String, request: any) {
    httpRequest("PUT", url, request);
  },
};
