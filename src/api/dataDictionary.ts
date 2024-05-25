import { GET, POST, DELETE, PATH } from '@/utils/request'
import type { IList } from '@/api/types'

export interface IDataDictionary {
  id: string
  name: string
  type: string
  value: string
}

export const DataDictionaryList = (params: any) =>
  GET<IList<IDataDictionary[]>>('/dataDictionary', params)

export const DataDictionaryAdd = (params: any) => POST<string>('/dataDictionary', params)

export const DataDictionaryDetail = (id: string) => GET<IDataDictionary>(`/dataDictionary/${id}`)

export const DataDictionaryDel = (id: string) => DELETE<string>(`/dataDictionary/${id}`)

export const DataDictionaryUpdate = (id: string, params: any) =>
  PATH<IDataDictionary>(`/dataDictionary/${id}`, params)

export const DataDictionaryAll = () => GET<IDataDictionary[]>('/dataDictionaryAll')
