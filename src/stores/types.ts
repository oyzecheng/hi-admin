import type { LocationQuery, RouteParams } from 'vue-router'

export interface INavigationItem {
  name: string
  title: string
  query?: LocationQuery
  params?: RouteParams
}
