import type { ConfigProviderProps } from 'ant-design-vue'

export const antdTheme: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: '#01A76F',
    colorError: '#FF5631',
    colorWarning: '#FFAB00'
  },
  components: {
    Layout: {
      colorBgBody: '#fff'
    },
    Menu: {}
  }
}
