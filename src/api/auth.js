import request from "../helpers/request"

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  AUTH: '/auth',
  LOGOUT: '/auth/logout'
}

export default {
  signUp({username, password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  logIn({username, password}) {
    return request(URL.LOGIN, 'POST', {username, password})
  },
  getAuthInfo() {
    return request(URL.AUTH)
  },
  logOut() {
    return request(URL.LOGOUT)
  }
}