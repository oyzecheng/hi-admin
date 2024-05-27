import type { TableColumnType, TableProps } from 'ant-design-vue'
import type { Ref } from 'vue'
import type { TButtonController } from '@/components/hiButton/types'
import type { HiDicController } from '@/components/hiDic/controller/hiDicController'
import type { HiButtonController } from '@/components/hiButton/controller/hiButtonController'
import type { IResponse } from '@/utils/request'
import type { IList } from '@/api/types'

export interface IHITableColumnItem extends TableColumnType {
  buttonConfigList?: TButtonController[]
  dic?: HiDicController
  auth?: string
}

export type THiTableColumns = IHITableColumnItem[]

export type THiTableData<T = any[]> = IResponse<IList<T>>

export interface IHiTableConfig extends Omit<TableProps, 'loading'> {
  loading: Ref<boolean>
  selection?: boolean
  pagination?: false | TableProps['pagination']
}

export type THiTableLoadData<T = any[]> = (params: any) => Promise<THiTableData<T>>

export interface IHiTableSelectedData {
  selectedRowKeys: (string | number)[]
  selectedRows: any[]
  selectionConfig: IHiTableConfig['rowSelection']
}

export type THiTableSelectedContainerButtonControllers = HiButtonController[]

export type TObject = { [k: string]: any }
