import Mock from 'mockjs-async'

import './db'

import './services/user.js'
import './services/userManage.js'
import './services/router.js'
import './services/customPage.js'

Mock.setup({
  timeout: 500
})
