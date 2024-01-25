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

    const dataPage = +page || this.page
    const dataPageSize = +pageSize || this.pageSize
    return {
      data: {
        page: dataPage,
        pageSize: dataPageSize,
        count: list.length,
        list: [...list].slice(
          (dataPage - 1) * dataPageSize,
          (dataPage - 1) * dataPageSize + dataPageSize
        )
      }
    }
  }

  getDetail(options) {
    const itemId = getUrlId(options)
    return this.list.find((item) => item.id === itemId)
  }

  updateItem(options) {
    const itemId = getUrlId(options)
    const itemBody = getBody(options)
    const index = this.list.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      this.list[index] = { ...this.list[index], ...itemBody }
      return this.list[index]
    }
    return false
  }

  addItem(options) {
    const item = getBody(options)
    item.id = Random.guid()
    this.list.unshift(item)
  }

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

export const getBody = (options) => {
  const { body } = options
  try {
    return JSON.parse(body)
  } catch (err) {
    return {}
  }
}
