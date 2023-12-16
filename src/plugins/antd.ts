import { Button, Space, Form, FormItem, Input, Select, ConfigProvider } from 'ant-design-vue'
import type { App } from 'vue'

const useAntd = (app: App<Element>) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Space)
  app.use(Form)
  app.use(FormItem)
  app.use(Input)
  app.use(Select)
}

export default useAntd
