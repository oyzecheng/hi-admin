import Mock from 'mockjs-async'
import { builder } from '@/mock/util.js'
import { mockDb } from '@/mock/db/index.js'

const Random = Mock.Random

const products = ['食品', '服装', '鞋类', '美妆', '百货']

const sellWellProductsData = [
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg',
    name: 'Nike Air Force 1 NDESTRUKT',
    price: Random.integer(100, 999),
    sellCount: 992
  },
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_2.jpg',
    name: 'Foundations Matte Flip Flop',
    price: Random.integer(100, 999),
    sellCount: 893
  },
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg',
    name: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    price: Random.integer(100, 999),
    sellCount: 690
  },
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_4.jpg',
    name: 'Arizona Soft Footbed Sandal',
    price: Random.integer(100, 999),
    sellCount: 678
  },
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg',
    name: 'Boston Soft Footbed Sandal',
    price: Random.integer(100, 999),
    sellCount: 623
  },
  {
    id: Random.guid(),
    poster: 'https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_6.jpg',
    name: 'Jordan Delta',
    price: Random.integer(100, 999),
    sellCount: 556
  }
]

Mock.mock(/\/bestSalesman/, 'get', () => {
  return new Promise((resolve) => {
    mockDb.userManage.getAll().then((list) => {
      const data = {
        list: list
          .filter((item) => item.role === 2)
          .slice(0, 5)
          .map((item, index) => ({
            ...item,
            rank: index + 1,
            price: 1000 - Random.integer(index * 10, (index + 1) * 10),
            product: products[Random.integer(0, 4)]
          }))
      }
      resolve(builder(data))
    })
  })
})

Mock.mock(/\/sellWellProducts/, 'get', () => {
  return new Promise((resolve) => {
    resolve(builder(sellWellProductsData))
  })
})
