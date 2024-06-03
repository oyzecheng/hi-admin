import { builder, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'
import { random } from '@/utils/index.ts'

const products = ['食品', '服装', '鞋类', '美妆', '百货']

mock.onGet('/bestSalesman').reply(async () => {
  const list = await mockDb.userManage.getAll()
  const data = {
    list: list
      .filter((item) => item.role === '2')
      .slice(0, 5)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
        price: random((10 - index) * 1000, (11 - index) * 1000),
        product: products[random(0, products.length - 1)]
      }))
  }
  return [200, builder(data)]
})

mock.onGet('/sellWellProducts').reply(async () => {
  const { list } = await mockDb.productManage.getList({ page: 1, pageSize: 6 })
  return [200, builder(list.map((item) => ({ ...item, sellCount: random(100, 1000) })))]
})
