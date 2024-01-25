import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import type {
  IHiTableConfig,
  IHiTableSelectedData,
  THiTableColumns,
  THiTableLoadData
} from '@/components/hiTable/types'
import { reactive, ref } from 'vue'

interface IUseHiTableConfig extends Omit<IHiTableConfig, 'loading'> {
  loading?: boolean
}

export const useHiTable = (
  columns: THiTableColumns,
  config: IUseHiTableConfig = {},
  loadData?: THiTableLoadData
) => {
  const tableData = reactive({ page: 0, pageSize: 0, count: 0, list: [] })

  const loading = ref(config.loading || false)
  const pagination = reactive(config.pagination || {})
  const scroll = reactive(config.scroll || {})
  const selectedData = reactive<IHiTableSelectedData>({
    selectedRowKeys: [],
    selectedRows: [],
    selectionConfig: config.rowSelection || {}
  })

  return new HiTableController(loadData, columns, tableData, selectedData, {
    ...config,
    loading,
    pagination,
    scroll
  })
}
