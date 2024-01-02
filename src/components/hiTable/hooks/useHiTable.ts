import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import type { IHiTableConfig, THiTableColumns, THiTableLoadData } from '@/components/hiTable/types'
import { reactive, ref } from 'vue'

interface IUseHiTableConfig extends Omit<IHiTableConfig, 'loading'> {
  loading?: boolean
}

export const useHiTable = (
  loadData: THiTableLoadData,
  columns: THiTableColumns,
  config: IUseHiTableConfig = {}
) => {
  const tableData = reactive({ page: 0, pageSize: 0, count: 0, list: [] })

  const loading = ref(config.loading || false)
  const pagination = reactive(config.pagination || {})

  return new HiTableController(loadData, columns, tableData, { ...config, loading, pagination })
}
