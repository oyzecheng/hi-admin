import Mock from 'mockjs'
import qs from 'qs'
const Random = Mock.Random

const responseBody = {
  message: '',
  timestamp: '',
  data: '',
  code: ''
}

export const builder = (data, message, code = 200) => {
  responseBody.data = data
  if (message !== undefined && message !== null) {
    responseBody.message = message
  }
  if (code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }
  responseBody.timestamp = new Date().getTime()
  return responseBody
}

export class GenerateList {
  constructor(getList) {
    this.count = Random.integer(20, 50)
    this.page = 1
    this.pageSize = 10
    this.list = getList(this.count)
  }

  getResult(options) {
    const { page, pageSize, name, status } = getQueryParams(options)
    const list = this.list.filter((item) => {
      if (name && status) {
        return item.name.includes(name) && item.status === +status
      }
      if (name) {
        return item.name.includes(name)
      }
      if (status) {
        return item.status === +status
      }
      return true
    })
    return {
      data: {
        page: +page || this.page,
        pageSize: +pageSize || this.pageSize,
        count: list.length,
        list
      }
    }
  }

  getDetail(options) {
    const itemId = getUrlId(options)
    return this.list.find((item) => item.id === itemId)
  }

  updateItem() {}

  deleteItem(options) {
    const itemId = getUrlId(options)
    const index = this.list.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      this.list.splice(index, 1)
      return true
    }
    return false
  }
}

export const getQueryParams = (options) => {
  const url = options.url
  return qs.parse(url.split('?')[1]) || {}
}

export const getUrlId = (options) => {
  const url = options.url
  const arr = url.split('/')
  return arr[arr.length - 1]
}
