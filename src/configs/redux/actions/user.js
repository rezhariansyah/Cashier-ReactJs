import Axios from "axios";
import urlApi from "../../urlApi";

export const registerUser = data => {
  return {
    type: "REGISTER_USER",
    payload: Axios.post(urlApi + `/user/register`, data)
  };
};

// get all data users
export const getDataUser = () => {
  return {
    type: "GET_ALL_USER",
    payload: Axios.get(urlApi + "/user")
  };
};

// get all users
export const userLogin = data => {
  return {
    type: "LOGIN_USER",
    payload: Axios.post(urlApi + `/user/login`, data, {
      headers: {
        authorization: "welcometoapp",
        "x-token": "token",
        "x-user": "1"
      }
    })
  };
};
