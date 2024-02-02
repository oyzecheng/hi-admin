<template>
  <div class="hi-page" ref="pageRef">
    <div class="search-box">
      <div>
        <HiForm
          v-if="searchFormController"
          :controller="searchFormController"
          :buttonConfig="[clearButton]"
        >
          <template v-if="slots.searchFormContent" #content="{ controllerList, formData, rules }">
            <slot
              name="searchFormContent"
              :controllerList="controllerList"
              :formData="formData"
              :rules="rules"
            />
          </template>
        </HiForm>
      </div>
      <HiButtonList v-if="topButtonController" :config-list="topButtonController" />
    </div>
    <HiTable
      :controller="tableController"
      :selected-container-button-controllers="selectedContainerButtonControllers"
    >
      <template #bodyCell="{ column, record }">
        <slot name="bodyCell" :column="column" :record="record" />
      </template>
      <template #headerCell="{ column }">
        <slot name="headerCell" :column="column" />
      </template>
    </HiTable>
  </div>
</template>

<script setup>
import { h, onBeforeUnmount, onMounted, ref, toRefs, useSlots } from 'vue'
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
  },
  selectedContainerButtonControllers: {
    type: Array
  }
})

const {
  tableController,
  searchFormController,
  topButtonController,
  selectedContainerButtonControllers
} = toRefs(props)
const slots = useSlots()
const changeMap = new Map()
const pageRef = ref(null)
let resizeObserver = null

const clearButton = useHiButton('clear', {
  danger: true,
  type: 'text',
  icon: h(DeleteOutlined),
  isShow: false,
  className: 'clear-button'
})
clearButton.onClick(() => {
  searchFormController.value && searchFormController.value.resetFields()
  clearButtonIsShow()
  tableController.value.reloadData()
})

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    setScroll()
  })
  resizeObserver.observe(document.body)
  setScroll()
})
onBeforeUnmount(() => {
  resizeObserver && resizeObserver.disconnect()
})

const clearButtonIsShow = () => {
  const formData = searchFormController.value?.getFormData() || {}
  for (const key in formData) {
    const item = formData[key]
    if (item !== undefined && item !== '') {
      clearButton.showButton()
      return
    }
  }
  clearButton.hideButton()
}

const overrideSearchFormItemOnChange = (controllerList) => {
  changeMap.clear()

  for (const item of controllerList) {
    if (Array.isArray(item)) {
      overrideSearchFormItemOnChange(item)
      continue
    }

    changeMap.set(item.key, item.getConfigItemByKey('onChange'))
    item.setConfigItemByKey(
      'onChange',
      debounce((value) => {
        const result = changeMap.get(item.key)
        result && result(value)
        clearButtonIsShow()
        tableController.value.reloadData(searchFormController.value?.getFormData() || {})
      })
    )
  }
}
overrideSearchFormItemOnChange(searchFormController.value?.getConfigList() || [])

const setScroll = () => {
  const page = pageRef.value
  const table = page.querySelector('.hi-table')
  const tbody = table.querySelector('.ant-table-tbody')
  const tableBottom = table.querySelector('.hi-table-bottom')
  const rect = tbody.getBoundingClientRect()
  const value = window.innerHeight - rect.top - (tableBottom.offsetHeight + 40)
  const scroll = tableController.value.getConfigItemByKey('scroll')
  scroll.y = value
}

defineExpose({
  overrideSearchFormItemOnChange
})
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
