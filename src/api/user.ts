import { GET, POST } from '@/utils/request'

export const Login = (data: any) => POST('/login', data)

export const UserInfo = () => GET('/userInfo')

export const UserRoutes = (): any => GET('/userRoutes')
