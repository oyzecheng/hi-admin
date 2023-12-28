import { HiTableController } from '@/components/hiTable/controller/hiTableController'
import type { THiTableColumns, THiTableLoadData } from '@/components/hiTable/types'
import { reactive } from 'vue'

export const useHiTable = (loadData: THiTableLoadData, columns: THiTableColumns) => {
  const tableData = reactive({ page: 0, pageSize: 0, count: 0, list: [] })

  return new HiTableController(loadData, columns, tableData)
}
