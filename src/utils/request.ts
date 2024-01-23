import axios from 'axios'
import { GetItem } from '@/utils/storage'
import { USER_TOKEN } from '@/constant/user'

const request = axios.create({
  baseURL: '',
  timeout: 10 * 60 * 1000
})

request.interceptors.request.use((config) => {
  const token = GetItem(USER_TOKEN)

  config.headers['authorization_token'] = token

  return config
})

request.interceptors.response.use((response) => {
  const { data, status } = response

  if (status === 200) {
    return data
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
    params,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  })
}

export const DELETE = (url: string) => {
  return request({
    url,
    method: 'delete'
  })
}
