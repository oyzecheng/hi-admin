import type { TableColumnType } from 'ant-design-vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'

export interface IHITableColumnItem extends TableColumnType {
  buttonConfigList?: HiButtonController[]
}

export type THiTableColumns = IHITableColumnItem[]

export interface IHiTableData {
  data: {
    page: number
    pageSize: number
    count: number
    list: any[]
  }
}

export type THiTableLoadData = (params: any) => Promise<IHiTableData>
