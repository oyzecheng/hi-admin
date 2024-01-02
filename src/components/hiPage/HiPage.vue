<template>
  <div class="hi-page">
    <div class="search-box">
      <HiForm
        v-if="searchFormController"
        :controller="searchFormController"
        :buttonConfig="[clearButton]"
      />
      <HiButtonList v-if="topButtonController" :config-list="topButtonController" />
    </div>
    <HiTable :controller="tableController" />
  </div>
</template>

<script setup>
import { h } from 'vue'
import HiTable from '@/components/hiTable/HiTable.vue'
import HiForm from '@/components/hiForm/HiForm.vue'
import HiButtonList from '@/components/hiButton/HiButtonList.vue'
import { DeleteOutlined } from '@ant-design/icons-vue'
import { useHiButton } from '@/components/hiButton/index.ts'
import { HiTableController } from '@/components/hiTable/controller/hiTableController.ts'
import { HiFormController } from '@/components/hiForm/controller/hiFormController.ts'
import { debounce } from '@/utils/index.ts'

const props = defineProps({
  tableController: {
    type: HiTableController,
    required: true
  },
  searchFormController: {
    type: HiFormController,
    default: null
  },
  topButtonController: {
    type: Array,
    default: null
  }
})

const { tableController, searchFormController } = props
const changeMap = new Map()

const clearButton = useHiButton('clear', {
  danger: true,
  type: 'text',
  icon: h(DeleteOutlined),
  isShow: false,
  className: 'clear-button'
})
clearButton.onClick(() => {
  searchFormController && searchFormController.resetFields()
  clearButtonIsShow()
  tableController.reloadData()
})

const clearButtonIsShow = () => {
  const formData = searchFormController?.getFormData() || {}
  for (const key in formData) {
    const item = formData[key]
    if (item !== undefined && item !== '') {
      clearButton.showButton()
      return
    }
  }
  clearButton.hideButton()
}

const overrideSearchFormItemOnChange = () => {
  const controllerList = searchFormController?.getConfigList() || []

  for (const item of controllerList) {
    changeMap.set(item.key, item.getConfigItemByKey('onChange'))
    item.setConfigItemByKey(
      'onChange',
      debounce((value) => {
        const result = changeMap.get(item.key)
        result && result(value)
        clearButtonIsShow()
        tableController.reloadData(searchFormController?.getFormData() || {})
      })
    )
  }
}
overrideSearchFormItemOnChange()
</script>

<style scoped lang="less">
.hi-page {
  background-color: #fff;
  box-shadow:
    rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
    rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .search-box {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    :deep(.clear-button) {
      font-weight: bold;
      .anticon {
        color: var(--color-error);
      }
    }
  }
}
</style>
