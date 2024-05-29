import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/login')
})

const adminInfo = { email: 'admin@gmail.com', password: '123' }
const userInfo = { email: 'user@gmail.com', password: '123' }

test.describe('User Login', () => {
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

  test('should show login success', async ({ page }) => {
    await page.getByPlaceholder('请输入邮箱').fill(adminInfo.email)
    await page.getByPlaceholder('请输入密码').fill(adminInfo.password)
    await page.getByRole('button', { name: '登 陆' }).click()
    await page.waitForURL('http://localhost:5173')
    expect(page.url() === 'http://localhost:5173/').toBeTruthy()
  })
})
