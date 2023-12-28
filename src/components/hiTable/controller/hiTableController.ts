import type { IHiTableData, THiTableColumns, THiTableLoadData } from '@/components/hiTable/types'

export class HiTableController {
  tableData: IHiTableData['data']
  private readonly loadData: THiTableLoadData
  columns: THiTableColumns

  constructor(
    loadData: THiTableLoadData,
    columns: THiTableColumns,
    tableData: IHiTableData['data']
  ) {
    this.tableData = tableData
    this.loadData = loadData
    this.columns = this.generateColumns(columns)
  }

  private generateColumns(columns: THiTableColumns) {
    columns.forEach((item) => {
      item.dataIndex = item.key
    })
    return columns
  }

  async reloadData(params: any = {}) {
    const { data } = await this.loadData(params)
    const { page, pageSize, count, list } = data
    this.tableData.list = list
    this.tableData.page = page
    this.tableData.pageSize = pageSize
    this.tableData.count = count
  }
}
