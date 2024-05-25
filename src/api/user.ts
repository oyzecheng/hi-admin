import { GET, POST } from '@/utils/request'
import type { IUser } from '@/api/userManage'

export const Login = (data: any) => POST<IUser>('/login', data)

export const UserInfo = () => GET<IUser>('/userInfo')

export const UserRoutes = (): any => GET('/userRoutes')
