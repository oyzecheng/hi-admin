import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { generateKey } from '@/utils/index.ts'

export const mock = new MockAdapter(axios, { delayResponse: 250 })

const responseBody = {
  message: '',
  timestamp: '',
  data: '',
  code: ''
}

export const builder = (data, message = 'success', code = 200) => {
  const response = { ...responseBody, data }
  if (message !== undefined && message !== null) {
    response.message = message
  }
  if (code !== undefined && code !== 0) {
    response.code = code
    response._status = code
  }
  response.timestamp = new Date().getTime()
  return response
}

export const builderError = (message = '', code = 401) => {
  return builder(null, message, code)
}

export const getUrlId = (options) => {
  const url = options.url
  const arr = url.split('/')
  return arr[arr.length - 1]
}

export const getBody = (options) => {
  const { data } = options
  try {
    return { id: generateKey(), ...JSON.parse(data) }
  } catch (err) {
    return {}
  }
}

export const getUserInfo = (options) => {
  const { authorization_token } = options.headers
  return JSON.parse(authorization_token)
}
