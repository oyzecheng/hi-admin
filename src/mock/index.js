import Mock from 'mockjs-async'

import './db'

import './services/user.js'
import './services/userManage.js'
import './services/router.js'
import './services/customPage.js'
import './services/dataDictionary.js'
import './services/home.js'

Mock.setup({
  timeout: 300
})
