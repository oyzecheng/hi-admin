import {
  Button,
  Space,
  Form,
  Input,
  Select,
  ConfigProvider,
  Checkbox,
  Radio,
  Table
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
}

export default useAntd
