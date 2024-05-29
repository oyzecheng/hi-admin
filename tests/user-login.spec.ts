import { test, expect, Page } from '@playwright/test'
import { loginSuperAdmin, loginUser } from './utils'

const adminInfo = { email: 'admin@gmail.com', password: '123' }
const userInfo = { email: 'user@gmail.com', password: '123' }

test.describe('User Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/login')
  })

  test('should show email error', async ({ page }) => {
    await page.getByPlaceholder('请输入邮箱').fill('a@b.com')
    await page.getByPlaceholder('请输入密码').fill(adminInfo.password)
    await page.getByRole('button', { name: '登 陆' }).click()
    await expect(page.getByText('用户名或密码错误')).toBeVisible()
  })

  test('should show password error', async ({ page }) => {
    await page.getByPlaceholder('请输入邮箱').fill(userInfo.email)
    await page.getByPlaceholder('请输入密码').fill('a')
    await page.getByRole('button', { name: '登 陆' }).click()
    await expect(page.getByText('用户名或密码错误')).toBeVisible()
  })

  test('should show empty error', async ({ page }) => {
    await page.getByRole('button', { name: '登 陆' }).click()
    await expect(page.locator('.ant-form .ant-form-show-help')).toContainText([
      '请输入邮箱',
      '请输入密码'
    ])
  })

  test('should show admin login success', async ({ page }) => {
    await loginSuperAdmin(page)
    await page.locator('.system-operation .avatar').click()
    await expect(page.locator('.user-container')).toContainText(adminInfo.email)
  })

  test('should show user login success', async ({ page }) => {
    await loginUser(page)
    await page.locator('.system-operation .avatar').click()
    await expect(page.locator('.user-container')).toContainText(userInfo.email)
  })
})

test.describe('User Logout', () => {
  test('should admin logout success', async ({ page }) => {
    await loginSuperAdmin(page)
    await page.locator('.system-operation .avatar').click()
    await page.locator('.user-container .ant-dropdown-menu', { hasText: '退出登录' }).click()
    await page.waitForURL('**/login')
    expect(page.url() === 'http://localhost:5173/login').toBeTruthy()
    const isLocalStorageEmptyResult = await isLocalStorageEmpty(page)
    expect(isLocalStorageEmptyResult).toBeTruthy()
  })
  test('should user logout success', async ({ page }) => {
    await loginUser(page)
    await page.locator('.system-operation .avatar').click()
    await page.locator('.user-container .ant-dropdown-menu', { hasText: '退出登录' }).click()
    await page.waitForURL('**/login')
    expect(page.url() === 'http://localhost:5173/login').toBeTruthy()
    const isLocalStorageEmptyResult = await isLocalStorageEmpty(page)
    expect(isLocalStorageEmptyResult).toBeTruthy()
  })
})

async function isLocalStorageEmpty(page: Page) {
  const localStorage = await page.evaluate(() => localStorage)
  return Object.keys(localStorage).length === 0
}
