import type {
  IHiTableConfig,
  IHiTableData,
  THiTableColumns,
  THiTableLoadData
} from '@/components/hiTable/types'

export class HiTableController {
  tableData: IHiTableData['data']
  private readonly loadData: THiTableLoadData
  private readonly columns: THiTableColumns
  private readonly config: IHiTableConfig
  private oldParams: { [k: string]: any }

  constructor(
    loadData: THiTableLoadData,
    columns: THiTableColumns,
    tableData: IHiTableData['data'],
    tableConfig: IHiTableConfig
  ) {
    this.tableData = tableData
    this.loadData = loadData
    this.columns = this.generateColumns(columns)
    this.config = this.setDefaultConfig(tableConfig)
    this.oldParams = {}
  }

  private generateColumns(columns: THiTableColumns) {
    columns.forEach((item) => {
      item.dataIndex = item.key
    })
    return columns
  }

  private changeLoading(value = false) {
    this.config.loading.value = value
  }

  private setDefaultConfig(config: IHiTableConfig) {
    config.pagination = {
      showTotal: (total) => `共${total}条数据`,
      onChange: (page, pageSize) => {
        this.reloadData({ ...this.oldParams, page: page, pageSize })
      }
    }
    return config
  }

  private setPagination(paginationConfig: IHiTableConfig['pagination']) {
    this.config.pagination = { ...this.config.pagination, ...paginationConfig }
  }

  async reloadData(params: any = {}) {
    this.showLoading()
    try {
      const { data } = await this.loadData(params)
      this.oldParams = params
      const { page, pageSize, count, list } = data
      this.tableData.list = list
      this.tableData.page = page
      this.tableData.pageSize = pageSize
      this.tableData.count = count
      this.setPagination({ total: count, current: page, pageSize })
    } finally {
      this.hideLoading()
    }
  }

  showLoading() {
    this.changeLoading(true)
  }

  hideLoading() {
    this.changeLoading()
  }

  getColumns() {
    return this.columns
  }

  getConfig() {
    return this.config
  }
}
