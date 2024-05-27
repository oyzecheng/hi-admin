import { h } from 'vue'
import { HomeOutlined, FormOutlined, UserOutlined, RadarChartOutlined } from '@ant-design/icons-vue'

const RouterIcon = {
  home: () => h(HomeOutlined),
  form: () => h(FormOutlined),
  user: () => h(UserOutlined),
  system: () => h(RadarChartOutlined)
}

export default RouterIcon
