import { expect, test } from '@playwright/test'
import { loginSuperAdmin } from './utils'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await loginSuperAdmin(page)
  })

  test('should show best sellers', async ({ page }) => {
    await expect(
      page.locator('.best-salesman .hi-table .ant-table-tbody .ant-table-row')
    ).toHaveCount(5)
  })

  test('should show sell well products', async ({ page }) => {
    await expect(page.locator('.sell-well-products .list .item')).toHaveCount(6)
  })

  test('should can search menu', async ({ page }) => {
    await page.locator('.ant-layout-header .ant-btn-icon-only .anticon-search').click()
    await page.getByPlaceholder('搜索...').fill('/user')
    const list = page.locator('.search-modal-content .simplebar-content .item')
    await expect(list).toHaveCount(5)
    await page.getByPlaceholder('搜索...').fill('列表')
    await expect(page.locator('.search-modal-content .simplebar-content .item')).toHaveCount(2)
    await page.locator('.ant-modal-wrap').click()
    await expect(page.locator('.ant-modal-wrap')).toHaveAttribute('style', 'display: none;')
  })
})
