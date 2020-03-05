// 封装 axios
import axios from 'axios'
import {Message} from "element-ui"

// 设置请求的 content-type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = ' http://blog-server.hunger-valley.com'
// 跨域带上 cookie
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    const option = {
      url,
      // 默认get
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      // `data` 是作为请求主体被发送的数据
      option.data = data
    }
    axios(option).then(res => {
      // 成功
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg: '网络异常'})
      console.log(err)
    })
  })
}