import { h } from 'vue'
import {
  HomeOutlined,
  FormOutlined,
  UserOutlined,
  RadarChartOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'

const RouterIcon = {
  home: () => h(HomeOutlined),
  form: () => h(FormOutlined),
  user: () => h(UserOutlined),
  system: () => h(RadarChartOutlined),
  product: () => h(AppstoreOutlined)
}

export default RouterIcon
