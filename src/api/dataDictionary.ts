import { GET, POST, DELETE, PATH } from '@/utils/request'

export const DataDictionaryList = (params: any) => GET('/dataDictionary', params)

export const DataDictionaryAdd = (params: any) => POST('/dataDictionary', params)

export const DataDictionaryDetail = (id: string) => GET(`/dataDictionary/${id}`)

export const DataDictionaryDel = (id: string) => DELETE(`/dataDictionary/${id}`)

export const DataDictionaryUpdate = (id: string, params: any) =>
  PATH(`/dataDictionary/${id}`, params)

export const DataDictionaryAll = () => GET('/dataDictionaryAll')
