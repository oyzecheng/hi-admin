import { Page } from '@playwright/test'

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
