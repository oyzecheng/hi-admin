import Mock from 'mockjs-async'

import './db'

import './services/user.js'
import './services/userManage.js'
import './services/router.js'

Mock.setup({
  timeout: 500
})
