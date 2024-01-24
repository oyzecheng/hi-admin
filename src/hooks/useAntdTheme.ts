import { reactive } from 'vue'

export const useAntdTheme = () => {
  const antdTheme = reactive({
    // algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#01A76F',
      colorError: '#FF5631',
      colorWarning: '#FFAB00',
      colorTextBase: '#141e24'
    },
    components: {
      Layout: {
        colorBgBody: '#fff'
      },
      Menu: {}
    }
  })

  const changeThemeColorPrimary = (color: string) => {
    antdTheme.token.colorPrimary = color
  }

  return { theme: antdTheme, changeThemeColorPrimary }
}
