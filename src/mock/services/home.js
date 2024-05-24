import { builder, mock } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'
import { random } from '@/utils/index.ts'

const products = ['食品', '服装', '鞋类', '美妆', '百货']

const sellWellProductsData = [
  {
    id: '1',
    poster: 'https://static.oouzc.com/products/product_1.jpg',
    name: 'Nike Air Force 1 NDESTRUKT',
    price: 988,
    sellCount: 992
  },
  {
    id: '2',
    poster: 'https://static.oouzc.com/products/product_2.jpg',
    name: 'Foundations Matte Flip Flop',
    price: 867,
    sellCount: 893
  },
  {
    id: '3',
    poster: 'https://static.oouzc.com/products/product_3.jpg',
    name: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    price: 793,
    sellCount: 690
  },
  {
    id: '4',
    poster: 'https://static.oouzc.com/products/product_4.jpg',
    name: 'Arizona Soft Footbed Sandal',
    price: 757,
    sellCount: 678
  },
  {
    id: '5',
    poster: 'https://static.oouzc.com/products/product_5.jpg',
    name: 'Boston Soft Footbed Sandal',
    price: 590,
    sellCount: 623
  },
  {
    id: '6',
    poster: 'https://static.oouzc.com/products/product_6.jpg',
    name: 'Jordan Delta',
    price: 492,
    sellCount: 556
  }
]

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

mock.onGet('/sellWellProducts').reply(200, builder(sellWellProductsData))
