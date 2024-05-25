export type TStatus = 1 | 2

export type TParams = { [k: string]: any } | unknown

export interface IList<T> {
  page: number
  pageSize: number
  count: number
  list: T
}
