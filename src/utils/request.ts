import axios from 'axios'
import { USER_TOKEN } from '@/constant/user'
import { notification } from 'ant-design-vue'
import { RemoveAll } from '@/utils/storage'

const request = axios.create({
  baseURL: '',
  timeout: 10 * 60 * 1000
})

request.interceptors.request.use((config) => {
  config.headers['authorization_token'] = window.localStorage.getItem(USER_TOKEN)

  return config
})

request.interceptors.response.use((response) => {
  const { data, status } = response

  if (status === 200) {
    if (data.code === 200) {
      return data
    } else {
      notification.error({
        message: '错误！',
        description: data.message
      })
      if (data.code === 403) {
        setTimeout(() => {
          window.location.href = '/login'
          RemoveAll()
        }, 1000)
      }
      return Promise.reject(data)
    }
  }

  return response
})

export const GET = (url: string, params?: any) => {
  return request({
    url,
    method: 'get',
    params,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export const POST = (url: string, params?: any) => {
  return request({
    url,
    method: 'post',
    data: params,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}

export const DELETE = (url: string) => {
  return request({
    url,
    method: 'delete'
  })
}

export const PATH = (url: string, params?: any) => {
  return request({
    url,
    method: 'patch',
    data: params,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}
