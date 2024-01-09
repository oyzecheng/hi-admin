import { h } from 'vue'
import {
  HomeOutlined,
  TableOutlined,
  FormOutlined,
  UserOutlined,
  CloseCircleOutlined
} from '@ant-design/icons-vue'

const RouterIcon: { [p: string]: any } = {
  home: () => h(HomeOutlined),
  table: () => h(TableOutlined),
  form: () => h(FormOutlined),
  user: () => h(UserOutlined),
  error: () => h(CloseCircleOutlined)
}

export default RouterIcon
