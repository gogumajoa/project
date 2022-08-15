import axios from "axios";
//가입 기능 생성
const API_URL = "http://43.200.205.215:8080/auth"; //api url

const signup = (Id, password) => {
  return axios
    .post(API_URL + "/signup", {
      Id,
      password,
    })
    .then((response) => { //나중에 새로고침 토큰도 추가해야할듯?
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (loginId, passwd) => {
  return axios
    .post(API_URL + "/login", {
      loginId,
      passwd,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;