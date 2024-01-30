import { useDic } from '@/components/hiDic'
import { useUserStore } from '@/stores/user'

export const buttonTypeDic = useDic([
  { label: '默认', value: 'default' },
  { label: '主要', value: 'primary' },
  { label: '幽灵', value: 'ghost' },
  { label: '虚线', value: 'dashed' },
  { label: '链接', value: 'link' },
  { label: '文字', value: 'text' }
])

export const buttonSizeDic = useDic([
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' }
])

export const buttonShapeDic = useDic([
  { label: '默认', value: 'default' },
  { label: '圆形', value: 'circle' },
  { label: '圆角', value: 'round' }
])

export const buttonEventDic = useDic([
  { label: '跳转页面', value: 'toPage' },
  { label: '请求接口', value: 'fetch' }
])

export const pageDic = useDic()
pageDic.setLoadFn(
  () => {
    const userStore = useUserStore()
    return JSON.parse(JSON.stringify(userStore.userRoutes))
  },
  'pageTitle',
  'routeName'
)
