import { POST_UPLOAD } from '@/utils/request'

export const UploadFile = (data: any) => POST_UPLOAD('/upload', data)
