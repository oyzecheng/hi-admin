import type { LocationQuery, RouteParams, RouteRecordName } from 'vue-router'

export interface INavigationItem {
  name: RouteRecordName
  title: string
  query?: LocationQuery
  params?: RouteParams
}
