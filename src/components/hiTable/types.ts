import type { TableColumnType, TableProps } from 'ant-design-vue'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import type { Ref } from 'vue'

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

export interface IHiTableConfig extends Omit<TableProps, 'loading'> {
  loading: Ref<boolean>
}

export type THiTableLoadData = (params: any) => Promise<IHiTableData>
