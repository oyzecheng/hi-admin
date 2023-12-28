import {
  Button,
  Space,
  Form,
  Input,
  Select,
  ConfigProvider,
  Checkbox,
  Radio,
  Table,
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Divider
} from 'ant-design-vue'
import type { App } from 'vue'

const useAntd = (app: App<Element>) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Space)
  app.use(Form)
  app.use(Input)
  app.use(Select)
  app.use(Checkbox)
  app.use(Radio)
  app.use(Table)
  app.use(Layout)
  app.use(Menu)
  app.use(Avatar)
  app.use(Dropdown)
  app.use(Divider)
}

export default useAntd