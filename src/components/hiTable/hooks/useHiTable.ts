import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import type {
  IHiTableConfig,
  IHiTableSelectedData,
  THiTableColumns,
  THiTableLoadData
} from '@/components/hiTable/types'
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'

interface IUseHiTableConfig extends Omit<IHiTableConfig, 'loading'> {
  loading?: boolean
}

export const useHiTable = (
  columns: THiTableColumns,
  config: IUseHiTableConfig = {},
  loadData?: THiTableLoadData
) => {
  const userStore = useUserStore()
  const tableData = reactive({ page: 0, pageSize: 0, count: 0, list: [] })

  const loading = ref(config.loading || false)
  const pagination = config.pagination === false ? false : reactive(config.pagination || {})
  const scroll = reactive(config.scroll || {})
  const selectedData = reactive<IHiTableSelectedData>({
    selectedRowKeys: [],
    selectedRows: [],
    selectionConfig: config.rowSelection || {}
  })

  return new HiTableController(
    loadData,
    columns.filter((item) => (item.auth ? userStore.validateButtonAuth(item.auth) : true)),
    tableData,
    selectedData,
    {
      ...config,
      loading,
      pagination,
      scroll
    }
  )
}
