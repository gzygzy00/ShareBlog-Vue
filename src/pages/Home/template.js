import request from "../../helpers/request"
import auth from "../../api/auth"
import blog from "../../api/blog"

window.blog = blog
window.auth = auth
window.request = request

export default {
  data(){
    return {}
  },
  methods: {
    clickTest1(){
      this.$message('here is clickTest1');
    },
    clickTest2(){
      this.$message.error('here is clickTest2')
    }
  }
}