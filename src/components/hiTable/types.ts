import type { TableColumnType, TableProps } from 'ant-design-vue'
import type { Ref } from 'vue'
import type { TButtonController } from '@/components/hiButton/types'
import type { HiDicController } from '@/components/hiDic/controller/hiDicController'

export interface IHITableColumnItem extends TableColumnType {
  buttonConfigList?: TButtonController[]
  dic?: HiDicController
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
  selection?: boolean
}

export type THiTableLoadData = (params: any) => Promise<IHiTableData>

export interface IHiTableSelectedData {
  selectedRowKeys: (string | number)[]
  selectedRows: any[]
  selectionConfig: IHiTableConfig['rowSelection']
}
