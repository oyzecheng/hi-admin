import { h } from 'vue'
import {
  HomeOutlined,
  TableOutlined,
  FormOutlined,
  UserOutlined,
  CloseCircleOutlined,
  RadarChartOutlined
} from '@ant-design/icons-vue'

const RouterIcon = {
  home: () => h(HomeOutlined),
  table: () => h(TableOutlined),
  form: () => h(FormOutlined),
  user: () => h(UserOutlined),
  error: () => h(CloseCircleOutlined),
  system: () => h(RadarChartOutlined)
}

export default RouterIcon
