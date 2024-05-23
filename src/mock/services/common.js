import { mock, builder } from '@/mock/util.js'
import { generateKey, random } from '@/utils/index.ts'

mock.onPost('/upload').reply((config) => {
  const file = config.data?.get('file')

  const data = {
    id: generateKey(),
    url: `https://static.oouzc.com/avatar/avatar_${random(1, 50)}.png`,
    name: file.name
  }
  return [200, builder(data)]
})
