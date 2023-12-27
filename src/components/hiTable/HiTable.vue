<template>
  <a-table :columns="columns"></a-table>
</template>

<script setup>
const columns = [
  { title: 'one', dataIndex: 'one', key: 'one' },
  { title: 'two', dataIndex: 'two', key: 'two' },
  { title: 'three', dataIndex: 'three', key: 'three' }
]
</script>

<style scoped></style>
