import { GET, POST } from '@/utils/request'

export const CustomPageSave = (id: string, params: any) => POST(`/customPage/${id}`, params)

export const CustomPageDetail = (id: string) => GET(`/customPage/${id}`)
