import { Page } from '@playwright/test'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const filePath = path.join(__dirname, '../../src/assets/images/red-blur.png')

const adminInfo = { email: 'admin@gmail.com', password: '123' }
const userInfo = { email: 'user@gmail.com', password: '123' }

async function userLogin(page: Page, userInfo: { email: string; password: string }) {
  await page.goto('http://localhost:5173/login')
  await page.getByPlaceholder('请输入邮箱').fill(userInfo.email)
  await page.getByPlaceholder('请输入密码').fill(userInfo.password)
  await page.getByRole('button', { name: '登 陆' }).click()
  await page.waitForURL('http://localhost:5173')
}

export async function loginSuperAdmin(page: Page) {
  await userLogin(page, adminInfo)
}

export async function loginUser(page: Page) {
  await userLogin(page, userInfo)
}

async function goToPage(page: Page, menuName: string) {
  await page
    .locator(`.ant-layout-sider-children .ant-menu .ant-menu-item`, { hasText: menuName })
    .click()
}

export async function goToProduct(page: Page) {
  await goToPage(page, '产品')
}

export async function waitTableLoading(page: Page) {
  await page.locator('.hi-table .ant-spin-spinning').waitFor({ state: 'detached' })
}

export async function findTableItemByText(page: Page, text: string) {
  return page.locator('.hi-table .ant-table-tbody .ant-table-row', {
    hasText: text
  })
}

export async function chooseSelectItemByText(page: Page, text: string) {
  await page.locator('.ant-select-dropdown .ant-select-item-option', { hasText: text }).click()
}
