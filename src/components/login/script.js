import Axios from 'axios'
const url = 'http://localhost:8888/api/private/v1/login'
export default {
  data () {
    return {
      loginObj: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginBtn () {
      //  获取用户输入的数据 请求服务器 验证此账号是否存在
      Axios.post(url, this.loginObj)
        .then(res => {
        //   console.log(res)
          // es6 对象结构
          const {data, meta} = res.data
          if (meta.status === 200) {
            console.log(meta.msg)
            // 如果登录成功 记录下系统给的 在 data 中的 token
            window.localStorage.setItem('token', data.token)
            this.$router.push('/home')
          } else {
            console.log(meta.msg)
          }
        })
    }
  }
}
