import { mock, builder } from '@/mock/util.js'
import { generateKey, random } from '@/utils/index.ts'

mock.onPost('/upload').reply((config) => {
  const file = config.data?.get('file')
  const type = config.data?.get('type')

  const url =
    type === 'avatar'
      ? `https://static.oouzc.com/avatar/avatar_${random(1, 50)}.png`
      : `https://static.oouzc.com/products/product_${random(1, 20)}.jpg`

  const data = {
    id: generateKey(),
    url,
    name: file.name
  }
  return [200, builder(data)]
})
