import type {
  IHiTableConfig,
  THiTableData,
  IHiTableSelectedData,
  THiTableColumns,
  THiTableLoadData,
  TObject
} from '@/components/hiTable/types'

export class HiTableController {
  tableData: THiTableData['data']
  private readonly selectedData: IHiTableSelectedData
  private loadData: THiTableLoadData<Array<any>> | undefined
  private readonly columns: THiTableColumns
  private readonly config: IHiTableConfig
  private oldParams: TObject
  private appendListData: TObject | null

  constructor(
    loadData: THiTableLoadData | undefined,
    columns: THiTableColumns,
    tableData: THiTableData['data'],
    selectedData: IHiTableSelectedData,
    tableConfig: IHiTableConfig
  ) {
    this.tableData = tableData
    this.loadData = loadData
    this.selectedData = selectedData
    this.columns = this.generateColumns(columns)
    this.config = this.setDefaultConfig(tableConfig)
    this.oldParams = {}
    this.appendListData = null
  }

  private generateColumns(columns: THiTableColumns) {
    columns.forEach((item) => {
      item.dataIndex = item.key
      if (item.dic) {
        item.customRender = ({ value }) => item.dic?.getLabelByValue(value)
      }
    })
    return columns
  }

  private changeLoading(value = false) {
    this.config.loading.value = value
  }

  private setDefaultConfig(config: IHiTableConfig) {
    config.rowKey = 'id'
    if (config.pagination !== false) {
      config.pagination = {
        showTotal: (total) => `共${total}条数据`,
        onChange: (page, pageSize) => {
          this.reloadData({ ...this.oldParams, page: page, pageSize })
        }
      }
    }
    if (config.scroll) {
      config.scroll.x = config.scroll?.x || 1000
    }
    this.setRowSelection(config)
    return config
  }

  private setRowSelection(config: IHiTableConfig) {
    const { selection } = config
    if (selection) {
      const handleSelected = (selected: boolean, selectedRows: any[]) => {
        const { rowKey = 'id' } = this.config
        const { selectionConfig } = this.selectedData
        if (selectionConfig) {
          if (selected) {
            this.selectedData.selectedRows = [...this.selectedData.selectedRows, ...selectedRows]
            const keys = this.selectedData.selectedRows.map((item) => item[rowKey as string])
            selectionConfig.selectedRowKeys = keys
            this.selectedData.selectedRowKeys = keys
          } else {
            const currentSelectedRows = [...this.selectedData.selectedRows]
            selectedRows.forEach((item) => {
              const index = currentSelectedRows.findIndex(
                (v) => item[rowKey as string] === v[rowKey as string]
              )
              currentSelectedRows.splice(index, 1)
            })
            const keys = currentSelectedRows.map((item) => item[rowKey as string])
            this.selectedData.selectedRows = currentSelectedRows
            selectionConfig.selectedRowKeys = keys
            this.selectedData.selectedRowKeys = keys
          }
        }
      }

      this.selectedData.selectionConfig = {
        columnWidth: 50,
        onSelect: (record, selected, selectedRows) => {
          handleSelected(selected, [record])
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          handleSelected(selected, changeRows)
        },
        ...(this.selectedData.selectionConfig || {}),
        selectedRowKeys: []
      }

      config.rowSelection = this.selectedData.selectionConfig
    }
  }

  private setPagination(paginationConfig: IHiTableConfig['pagination']) {
    this.config.pagination = { ...this.config.pagination, ...paginationConfig }
  }

  init() {
    this.config.loading.value = false
    this.resetSelectedData()
    this.config.pagination && this.setPagination({ total: 0, current: 1, pageSize: 10 })
  }

  async reloadData(params: any = {}) {
    if (this.loadData) {
      this.showLoading()
      try {
        const { data } = (await this.loadData(params)) || {}
        console.log('table data', data)
        this.oldParams = params
        const { page, pageSize, count, list } = data
        this.tableData.list = this.appendListData
          ? list.map((item) => ({ ...item, ...this.appendListData }))
          : list
        this.tableData.page = page
        this.tableData.pageSize = pageSize
        this.tableData.count = count
        if (this.config.pagination !== false) {
          this.setPagination({ total: count, current: page, pageSize })
        }
      } finally {
        this.hideLoading()
      }
    } else {
      throw new Error('请配置loadData')
    }
  }

  getSelectedData() {
    return this.selectedData
  }

  resetSelectedData() {
    this.selectedData.selectedRows = []
    this.selectedData.selectedRowKeys = []
    if (this.selectedData.selectionConfig) {
      this.selectedData.selectionConfig.selectedRowKeys = []
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

  getConfigItemByKey(key: keyof IHiTableConfig) {
    return this.config[key]
  }

  setConfigItemByKey(key: keyof IHiTableConfig, value: never) {
    this.config[key] = value
  }

  setLoadData<T extends Array<any> = any[]>(loadData: THiTableLoadData<T>) {
    this.loadData = loadData
  }

  appendData(data: { [k: string]: any }) {
    this.appendListData = data
  }
}
