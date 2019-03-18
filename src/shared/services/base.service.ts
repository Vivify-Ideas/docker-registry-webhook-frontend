import Vue from 'vue';
import Axios, { AxiosInstance } from "axios";

export class BaseService {
  protected http: AxiosInstance

  constructor() {
    this.http = Axios.create({
      baseURL: process.env.VUE_APP_BASE_URL,
      headers: {
        'Content-Type': "application/json"
      }
    });
    this.http.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.status === 403) {
        Vue.prototype.$router.push('/login');
        return;
      }
      return error;
    });
  }
}