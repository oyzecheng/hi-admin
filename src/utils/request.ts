import axios from 'axios'
import { USER_TOKEN } from '@/constant/user'
import { notification } from 'ant-design-vue'
import { RemoveAll } from '@/utils/storage'

export interface IResponse<T> {
  message: string
  timestamp: number
  code: number
  data: T
}

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

export const GET = <T = any>(url: string, params?: any) => {
  return request<any, IResponse<T>>({
    url,
    method: 'get',
    params,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export const POST = <T = any>(url: string, params?: any) => {
  return request<any, IResponse<T>>({
    url,
    method: 'post',
    data: params,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}

export const POST_UPLOAD = <T = any>(url: string, params?: any) => {
  return request<any, IResponse<T>>({
    url,
    method: 'post',
    data: params,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const DELETE = <T = any>(url: string, params?: any) => {
  return request<any, IResponse<T>>({
    url,
    data: params,
    method: 'delete'
  })
}

export const PATH = <T = any>(url: string, params?: any) => {
  return request<any, IResponse<T>>({
    url,
    method: 'patch',
    data: params,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}
