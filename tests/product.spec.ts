import { expect, Page, test } from '@playwright/test'
import {
  filePath,
  findTableItemByText,
  goToProduct,
  loginSuperAdmin,
  waitTableLoading
} from './utils'

const productOne = {
  name: 'testProductOne',
  price: '12',
  stock: '22',
  description: 'test product one description',
  cover: filePath
}

test.beforeEach(async ({ page }) => {
  await loginSuperAdmin(page)
  await goToProduct(page)
})

test.describe('Product Add', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
  })

  test('should add product error', async ({ page }) => {
    await page.getByRole('button', { name: '确 定' }).click()
    await expect(page.locator('.ant-form .ant-form-item-explain-error')).toContainText([
      '请输入产品名称',
      '请输入价格',
      '请输入库存',
      '请输入描述',
      '请上传封面'
    ])
  })
  test('should add product success', async ({ page }) => {
    await addProduct(page, productOne)
    await expect(page.locator('.hi-table .ant-table-tbody .ant-table-row').first()).toContainText(
      productOne.name + productOne.price + productOne.stock + productOne.description
    )
  })
})

test.describe('Product Del', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
  })

  test('should del product success', async ({ page }) => {
    await addProduct(page, productOne)
    await waitTableLoading(page)
    const first = page.locator('.hi-table .ant-table-tbody .ant-table-row', {
      hasText: productOne.name
    })
    await first.getByRole('button', { name: '删除' }).click()
    await page.locator('.ant-popover').getByRole('button', { name: '确 定' }).click()
    await page.locator('.ant-popover').waitFor({ state: 'detached' })
    await expect(
      page.locator('.hi-table .ant-table-tbody .ant-table-row').first()
    ).not.toContainText(productOne.name)
  })
})

test.describe('Product Edit', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addProduct(page, productOne)
    await waitTableLoading(page)
  })

  test('should edit product success', async ({ page }) => {
    const first = await findTableItemByText(page, productOne.name)
    await first.getByRole('button', { name: '编辑' }).click()
    await page.locator('.ant-form .render-upload .ant-upload-list-item-container').waitFor()
    await page.getByLabel('产品名称').fill(productOne.name + 'Edit')
    await page.getByRole('button', { name: '确 定' }).click()
    await waitTableLoading(page)
    await expect(page.locator('.hi-table .ant-table-tbody .ant-table-row').first()).toContainText(
      productOne.name + 'Edit'
    )
  })
})

test.describe('Product List Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: '新 建' }).click()
    await addProduct(page, productOne)
    await waitTableLoading(page)
  })

  test('should search product success', async ({ page }) => {
    expect(await findTableItemByText(page, productOne.name)).toBeTruthy()
    await page.getByLabel('产品名称').fill(productOne.name)
    await waitTableLoading(page)
    await expect(page.locator('.hi-table .ant-table-row')).toHaveCount(1)
    await page.getByLabel('产品名称').fill('null')
    await expect(page.locator('.hi-table .ant-table-row')).toHaveCount(0)
    await page.getByRole('button', { name: '取消' }).click()
    await waitTableLoading(page)
    expect(await findTableItemByText(page, productOne.name)).toBeTruthy()
  })
})

async function addProduct(page: Page, product: typeof productOne) {
  await page.getByLabel('产品名称').fill(product.name)
  await page.getByLabel('价格').fill(product.price)
  await page.getByLabel('库存').fill(product.stock)
  await page.getByLabel('描述').fill(product.description)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page
    .locator('.ant-form .ant-form-item-control-input .ant-upload-wrapper .ant-upload-select')
    .click()
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(product.cover)
  await page
    .locator('.ant-form .render-upload .ant-upload-list-item-uploading')
    .waitFor({ state: 'detached' })
  await page.getByRole('button', { name: '确 定' }).click()
  await page.waitForURL('**/product')
}
