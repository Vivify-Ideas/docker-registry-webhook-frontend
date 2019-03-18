import Axios from "axios";
import Vue from "vue";
import { USER_TOKEN_KEY } from "../../constants";

export function configureHttp() {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  if (token) {
    Axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}